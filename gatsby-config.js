module.exports = {
  siteMetadata: {
    title: `Anthony Caron Portfolio`,
    author: `Anthony Caron`,
    description: `A portfolio website for developer Anthony Caron.`,
    siteUrl: `https://www.anthonycaron.com/`
  },
  plugins: [
    {
      // Adds a manifest file
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Anthony Caron Portfolio`,
        short_name: `Anthony Caron`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#0F97DB`,
        display: `minimal-ui`,
        icon: `content/assets/logo.png`
      }
    },
    'gatsby-plugin-root-import',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-transition-link'
  ]
}
