module.exports = {
	siteMetadata: {
		siteName: `My Gatsby Starter`,
		siteUrl: `https://www.example.com`,
		description: ``,
		author: ``
	},
	plugins: [
		`gatsby-plugin-sass`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-netlify`,
		`gatsby-plugin-sitemap`,
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
				crossOrigin: `use-credentials`,
				cache_busting_mode: `none`
			}
		},
		{
			resolve: `gatsby-plugin-offline`,
			options: {
				workboxConfig: {
					globPatterns: [`**/*`]
				}
			}
		}
	]
};
