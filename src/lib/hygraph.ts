import { GraphQLClient } from 'graphql-request';

const HYGRAPH_ENDPOINT = process.env.HYGRAPH_ENDPOINT;
const HYGRAPH_TOKEN = process.env.HYGRAPH_TOKEN;

if (!HYGRAPH_ENDPOINT) {
    console.error("❌ HYGRAPH_ENDPOINT is missing in this environment.");
}

export const hygraph = new GraphQLClient(HYGRAPH_ENDPOINT || "https://missing-endpoint.com", {
    headers: {
        Authorization: `Bearer ${HYGRAPH_TOKEN}`,
    },
});
