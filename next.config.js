module.exports = {
  compiler: {
    styledComponents: true,
  },
  async redirects() {
    return [
      {
        source: '/instagram',
        destination: 'https://www.instagram.com/_swaaz_/',
        permanent: true,
      },
      {
        source: '/github',
        destination: 'https://github.com/swaaz',
        permanent: true,
      },
      {
        source: '/twitter',
        destination: 'https://twitter.com/Swaaz07',
        permanent: true,
      },
      {
        source: '/linkedin',
        destination: 'https://www.linkedin.com/in/swaaz/',
        permanent: true,
      }
    ]
  },
}