module.exports = {
  siteMetadata: {
    title: 'Anthony Caron Portfolio',
    author: 'Anthony Caron',
    description: 'A portfolio website for developer Anthony Caron.',
    siteUrl: 'https://www.anthonycaron.com/',
  },
  plugins: [
    {
      // Adds manifest file
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Anthony Caron Portfolio',
        short_name: 'Anthony Caron',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#0F97DB',
        display: 'minimal-ui',
        icon: 'content/assets/logo.png',
      },
    },
    'gatsby-plugin-eslint',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-transition-link',
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: { '@src': 'src' },
        extensions: ['js, jsx'],
      },
    },
  ],
}
