module.exports = {
	siteMetadata: {
		siteName: `My Gatsby Starter`,
		siteUrl: `https://my-gatsby-starter.now.sh/`,
		siteDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
		siteAuthor: `Lucas Johnson`,
		siteBanner: `https://placekitten.com/600/600`,
		siteLanguage: `en`,
		siteLogo: `https://placekitten.com/200/200`,
		facebook: ``,
		twitter: `@_lucasjohnson`,
		ogLanguage: `en_CA`,
		businessStreet: ``,
		businessLocality: ``,
		businessRegion: ``,
		businessPostalCode: ``,
		businessCountry: ``,
		businesstelephone: ``
	},
	plugins: [
		`gatsby-plugin-sass`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-netlify`,
		`gatsby-plugin-sitemap`,
		`gatsby-plugin-typescript`,
		`gatsby-plugin-netlify-cms`,
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
