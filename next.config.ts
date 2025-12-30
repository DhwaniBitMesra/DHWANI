import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

// Enable calling `getCloudflareContext()` in `next dev`.
// See https://opennext.js.org/cloudflare/bindings#local-access-to-bindings.
initOpenNextCloudflareForDev();

const nextConfig: NextConfig = {
	webpack: (config) => {
		config.resolve.alias = {
			...config.resolve.alias,
			// Prevent Next.js from trying to patch setImmediate which is read-only in CF Workers
			'next/dist/server/node-environment-extensions/fast-set-immediate': false,
		};
		return config;
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**",
			},
		],
	},
};

export default nextConfig;
