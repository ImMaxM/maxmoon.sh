const { withPlausibleProxy } = require('next-plausible')

// /** @type {import('next').NextConfig} */
// const nextConfig = {}

module.exports = withPlausibleProxy()({
    subdirectory: 'stats',
    scriptName: 'script.js',
    customDomain: 'https://maxuk.me'
})