/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: "standalone",
    distDir: "/.next",
    async rewrites() {
    return [
        {
            source: '/',
            destination: "/home"
        }
    ]
    },
    images: {
        unoptimized: false,
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'aktuelt.tv',
            },
            {
                protocol: 'https',
                hostname: 'flagcdn.com',
            },
            {
                protocol: 'https',
                hostname: 'bamblingen.no',
            },
            {
                protocol: 'http',
                hostname: 'localhost:3000',
            },
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com'
            }
        ]
    }
};

export default nextConfig;
