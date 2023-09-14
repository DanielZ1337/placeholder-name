/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true
    },
    images: {
        domains: [
            'localhost',
            'avatars.githubusercontent.com'
        ]
    }
}

module.exports = nextConfig
