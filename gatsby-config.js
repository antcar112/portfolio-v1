module.exports = {
	siteMetadata : {
		title       : `Anthony Caron Portfolio`,
		author      : `Anthony Caron`,
		description : `A portfolio website for developer Anthony Caron.`,
		siteUrl     : `https://pensive-turing-510d5b.netlify.com/`,
	},
	plugins      : [
		`gatsby-plugin-sharp`,
		{
			// Adds a manifest file
			resolve : `gatsby-plugin-manifest`,
			options : {
				name             : `Anthony Caron Portfolio`,
				short_name       : `Anthony Caron`,
				start_url        : `/`,
				background_color : `#ffffff`,
				theme_color      : `#0F97DB`,
				display          : `minimal-ui`,
				icon             : `content/assets/gatsby-icon.png`,
			},
		},
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-styled-components`,
	],
};
