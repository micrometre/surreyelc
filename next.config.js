module.exports = {
  reactStrictMode: true,
}


const securityHeaders = [
{
  key: 'X-DNS-Prefetch-Control',
  value: 'on'
},
]

module.exports = {
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
}
