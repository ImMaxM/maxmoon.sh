/** @type {import('next').NextConfig} */
module.exports = {
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