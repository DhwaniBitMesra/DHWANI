
const token = process.env.HYGRAPH_TOKEN!;

if (!token) {
    console.error("No usage token found!");
    process.exit(1);
}

const parts = token.split('.');
if (parts.length !== 3) {
    console.error("Token is not a valid JWT (does not have 3 parts)");
    process.exit(1);
}

try {
    const payload = JSON.parse(Buffer.from(parts[1], 'base64').toString());
    console.log("Token Payload:", JSON.stringify(payload, null, 2));

    // Check for management scopes
    if (payload.scopes) {
        console.log("Scopes:", payload.scopes);
    }

    // Check key id?
    if (payload.kid) console.log("Key ID:", payload.kid);

} catch (e) {
    console.error("Failed to decode token:", e);
}
