/** @type {import('next').NextConfig} */
const { withPlausibleProxy } = require('next-plausible')

module.exports = withPlausibleProxy()({
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
})