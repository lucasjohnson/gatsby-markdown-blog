module.exports = {
	siteMetadata: {
		siteName: `My Gatsby Starter`,
		description: ``,
		author: ``
	},
	plugins: [
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `My Gatsby Starter`,
				short_name: `My Gatsby Starter`,
				start_url: `/`,
				background_color: `#ffffff`,
				theme_color: `#7f1980`,
				display: `standalone`,
				icon: `src/images/icon.png`,
				crossOrigin: `use-credentials`
			}
		}
	]
};
