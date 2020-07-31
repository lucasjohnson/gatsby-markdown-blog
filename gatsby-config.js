module.exports = {
	siteMetadata: {
		siteLanguage: `en`,
		siteUrl: `https://my-gatsby-starter.vercel.app/`
	},
	plugins: [
		`gatsby-plugin-sass`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-typescript`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `assets`,
				path: `${__dirname}/static/assets`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `content`,
				path: `${__dirname}/content`
			}
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-relative-images`
					}
				]
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
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
		`gatsby-plugin-offline`,
		`gatsby-plugin-advanced-sitemap`
	]
};
