/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	swcMinify: true,
	images: {
		domains: ["randomuser.me", "fdn2.gsmarena.com"],
		formats: ["image/webp", "image/avif" ],
	},
};

module.exports = nextConfig;
