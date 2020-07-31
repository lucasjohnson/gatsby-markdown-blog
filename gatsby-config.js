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
		{
			resolve: `gatsby-plugin-advanced-sitemap`,
			options: {
				query: `{
          authors: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(authors)/"}}) {
            edges {
              node {
                id
                fields {
                  slug
                }
              }
            }
          }
          posts: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(posts)/"}}) {
            edges {
              node {
                id
                fields {
                  slug
                }
              }
            }
          }
          services: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(services)/"}}) {
            edges {
              node {
                id
                fields {
                  slug
                }
              }
            }
          }
          tags: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(tags)/"}}) {
            edges {
              node {
                id
                fields {
                  slug
                }
              }
            }
          }
        }`,
				mapping: {
					authors: {
						sitemap: `authors`
					},
					pages: {
						sitemap: `pages`
					},
					posts: {
						sitemap: `posts`
					},
					services: {
						sitemap: `services`
					},
					tags: {
						sitemap: `tags`
					}
				},
				exclude: [`/dev-404-page`, `/404`, `/404.html`],
				createLinkInHead: true,
				addUncaughtPages: true
			}
		},
		{
			resolve: `gatsby-plugin-feed`,
			options: {
				query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
          }
        `,
				feeds: [
					{
						serialize: ({ query: { site, allMarkdownRemark } }) => {
							return allMarkdownRemark.nodes.map((edge) => {
								return Object.assign({}, edge.frontmatter, {
									description: edge.frontmatter.abstract,
									date: edge.frontmatter.date,
									url: site.siteMetadata.siteUrl + edge.frontmatter.path,
									guid: site.siteMetadata.siteUrl + edge.frontmatter.path,
									custom_elements: [{ 'content:encoded': edge.html }]
								});
							});
						},
						query: `
              {
                allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(posts)/"}}) {
                  nodes {
                    frontmatter {
                      title
                      path
                      date
                      abstract
                    }
                    html
                  }
                }
              }
            `,
						output: `/rss.xml`,
						title: `Your Site's RSS Feed`
					}
				]
			}
		}
	]
};
