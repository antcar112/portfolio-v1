module.exports = {
	siteMetadata : {
		title       : `Anthony Caron Portfolio`,
		author      : `Anthony Caron`,
		description : `A portfolio website for developer Anthony Caron.`,
		siteUrl     : `https://gatsby-starter-blog-demo.netlify.com/`,
		social      : {
			// twitter : `kylemathews`,
		},
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
				name             : `Gatsby Starter Blog`,
				short_name       : `GatsbyJS`,
				start_url        : `/`,
				background_color : `#ffffff`,
				theme_color      : `#663399`,
				display          : `minimal-ui`,
				icon             : `content/assets/gatsby-icon.png`,
			},
		},
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-styled-components`,
	],
};
