import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
};

export default {
	...nextConfig,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**",
			},
		],
	},
};

// Enable calling `getCloudflareContext()` in `next dev`.
// See https://opennext.js.org/cloudflare/bindings#local-access-to-bindings.
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
