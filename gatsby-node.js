exports.createPages = async ({ actions, graphql, reporter }) => {
	const { data: pagesData } = await graphql(`
		query {
			allFile(filter: { relativeDirectory: { regex: "/(pages)/" } }) {
				edges {
					node {
						childMarkdownRemark {
							frontmatter {
								title
							}
							html
						}
					}
				}
			}
		}
	`);

	const { data: postsData } = await graphql(`
		query {
			allFile(filter: { relativeDirectory: { regex: "/(blog)/" } }) {
				edges {
					node {
						childMarkdownRemark {
							frontmatter {
								author
								date(formatString: "MMMM DD, YYYY")
								path
								title
								topics
							}
						}
					}
				}
			}
		}
	`);

	const { data: authorsData } = await graphql(`
		query {
			allFile(filter: { relativeDirectory: { regex: "/(authors)/" } }) {
				edges {
					node {
						childMarkdownRemark {
							frontmatter {
								title
								twitter
								image {
									childImageSharp {
										fluid {
											base64
											aspectRatio
											sizes
											src
											srcSet
										}
									}
								}
							}
						}
					}
				}
			}
		}
	`);

	const { data: servicesData } = await graphql(`
		query {
			allFile(filter: { relativeDirectory: { regex: "/(services)/" } }) {
				edges {
					node {
						childMarkdownRemark {
							frontmatter {
								title
								abstract
							}
							html
						}
					}
				}
			}
		}
	`);

	const { data: topicsData } = await graphql(`
		query {
			allFile(filter: { relativeDirectory: { regex: "/(topics)/" } }) {
				edges {
					node {
						childMarkdownRemark {
							frontmatter {
								title
							}
						}
					}
				}
			}
		}
	`);

	const pages = pagesData.allFile.edges;
	const posts = postsData.allFile.edges;
	const authors = authorsData.allFile.edges;
	const services = servicesData.allFile.edges;
	const topics = topicsData.allFile.edges;
	const { createPage } = actions;

	const allTtopicsArray = [];

	topics.forEach(({ node }) => {
		const { title } = node.childMarkdownRemark.frontmatter;
		allTtopicsArray.push(title);
	});

	pages.forEach(({ node }) => {
		const { title } = node.childMarkdownRemark.frontmatter;
		const { html } = node.childMarkdownRemark;
		const slug = `/${title.replace(/ /g, `-`).toLowerCase()}`;

		createPage({
			path: slug,
			component: require.resolve(`./src/templates/page.tsx`),
			context: {
				title,
				html
			}
		});
	});

	posts.forEach(({ node }, index) => {
		const { author, date, path } = node.childMarkdownRemark.frontmatter;

		let postAuthor;

		authors.forEach(({ node }) => {
			const { frontmatter } = node.childMarkdownRemark;
			const { title } = frontmatter;

			if (author === title) {
				postAuthor = frontmatter;
			}
		});

		createPage({
			path: `/blog/${path}`,
			component: require.resolve(`./src/templates/post.tsx`),
			context: {
				pathSlug: `${path}`,
				postAuthor,
				postDate: date,
				prev: index === 0 ? null : posts[index - 1].node,
				next: index === posts.length - 1 ? null : posts[index + 1].node
			}
		});
	});

	services.forEach(({ node }) => {
		const { title, abstract } = node.childMarkdownRemark.frontmatter;
		const { html } = node.childMarkdownRemark;
		const slug = `/${title.replace(/ /g, `-`).toLowerCase()}`;

		createPage({
			path: slug,
			component: require.resolve(`./src/templates/service.tsx`),
			context: {
				title,
				html,
				abstract
			}
		});
	});

	if (pagesData.errors || postsData.errors || servicesData.errors) {
		reporter.panicOnBuild(`Error while running GraphQL query.`);
		return;
	}
};

const { fmImagesToRelative } = require(`gatsby-remark-relative-images`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions;
	fmImagesToRelative(node);

	if (node.internal.type === `MarkdownRemark`) {
		const slug = createFilePath({ node, getNode });

		createNodeField({
			node,
			name: `slug`,
			value: slug
		});
	}
};
