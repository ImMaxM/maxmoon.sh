/** @type {import('next').NextConfig} */
module.exports = {
    distDir: 'build',
    images: {
        remotePatterns: [
            {
                // https://i.scdn.co/image/**
                protocol: 'https',
                hostname: 'i.scdn.co',
                port: '',
                pathname: '**',
            },
        ],
    },
}