// @ts-check

const path = require('path');

/**
 * @type {import("next").NextConfig}
 * */
const nextConfig = {
	reactStrictMode: false,
	typescript: {
		// !! WARN !!
		// Dangerously allow production builds to successfully complete even if
		// your project has type errors.
		// !! WARN !!
		ignoreBuildErrors: true,
	},

	swcMinify: true,
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: ['@svgr/webpack'],
		});

		return config;
	},
};

module.exports = nextConfig;
