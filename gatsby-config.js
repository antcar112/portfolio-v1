module.exports = {
	siteMetadata : {
		title       : `Anthony Caron Portfolio`,
		author      : `Anthony Caron`,
		description : `A portfolio website for developer Anthony Caron.`,
		siteUrl     : `https://gatsby-starter-blog-demo.netlify.com/`,
	},
	plugins      : [
		{
			resolve : `gatsby-source-filesystem`,
			options : {
				path : `${__dirname}/content/blog`,
				name : `blog`,
			},
		},
		{
			resolve : `gatsby-source-filesystem`,
			options : {
				path : `${__dirname}/content/assets`,
				name : `assets`,
			},
		},
		{
			resolve : `gatsby-transformer-remark`,
			options : {
				plugins : [
					{
						resolve : `gatsby-remark-images`,
						options : {
							maxWidth : 590,
						},
					},
				],
			},
		},
		`gatsby-transformer-sharp`,
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
