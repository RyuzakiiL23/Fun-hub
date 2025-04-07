/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https", // Specify the protocol (e.g., "http" or "https")
        hostname: "*", // Allow all hostnames
      },
      {
        protocol: "https",
        hostname: "logo.clearbit.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;