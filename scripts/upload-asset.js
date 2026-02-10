const fs = require("fs");
const path = require("path");
const { GraphQLClient, gql } = require("graphql-request");

function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  const content = fs.readFileSync(filePath, "utf8");
  for (const line of content.split(/\r?\n/)) {
    if (!line || line.trim().startsWith("#")) continue;
    const idx = line.indexOf("=");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();
    if (!key) continue;
    if ((value.startsWith("\"") && value.endsWith("\"")) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    if (process.env[key] === undefined) {
      process.env[key] = value;
    }
  }
}

function loadEnv() {
  const cwd = process.cwd();
  loadEnvFile(path.join(cwd, ".env.local"));
  loadEnvFile(path.join(cwd, ".env"));
}

async function main() {
  const url = process.argv[2];
  if (!url) {
    console.error("Usage: node scripts/upload-asset.js <public-image-url>");
    process.exit(1);
  }

  loadEnv();

  const endpoint = process.env.HYGRAPH_ENDPOINT;
  const token = process.env.HYGRAPH_TOKEN;

  if (!endpoint || !token) {
    console.error("Missing HYGRAPH_ENDPOINT or HYGRAPH_TOKEN in env.");
    process.exit(1);
  }

  const client = new GraphQLClient(endpoint, {
    headers: { Authorization: `Bearer ${token}` },
  });

  const createMutation = gql`
    mutation UploadAsset($url: String!) {
      createAsset(data: { uploadUrl: $url }) {
        id
      }
    }
  `;

  const publishMutation = gql`
    mutation PublishAsset($id: ID!) {
      publishAsset(where: { id: $id }, to: PUBLISHED) {
        id
      }
    }
  `;

  const assetQuery = gql`
    query GetAsset($id: ID!) {
      asset(where: { id: $id }) {
        id
        url
      }
    }
  `;

  const data = await client.request(createMutation, { url });
  const id = data.createAsset.id;

  // wait for processing
  for (let i = 0; i < 5; i++) {
    try {
      await new Promise((r) => setTimeout(r, 2000));
      await client.request(publishMutation, { id });
      break;
    } catch (e) {
      if (JSON.stringify(e).includes("non complete asset") && i < 4) {
        continue;
      }
      throw e;
    }
  }

  const asset = await client.request(assetQuery, { id });
  console.log("Asset ID:", id);
  console.log("Asset URL:", asset.asset?.url || "(not available yet)");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
