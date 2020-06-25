const { fmImagesToRelative } = require(`gatsby-remark-relative-images`);
const { createFilePath } = require(`gatsby-source-filesystem`);

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

	const { data: topicsData } = await graphql(`
		query {
			allFile(filter: { relativeDirectory: { regex: "/(topics)/" } }) {
				edges {
					node {
						childMarkdownRemark {
							frontmatter {
								title
							}
							fields {
								slug
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
							}
						}
					}
				}
			}
		}
	`);

	const pages = pagesData.allFile.edges;
	const posts = postsData.allFile.edges;
	const topics = topicsData.allFile.edges;
	const services = servicesData.allFile.edges;

	pages.forEach(({ node }) => {
		const { title } = node.childMarkdownRemark.frontmatter;
		const { html } = node.childMarkdownRemark;
		const slug = `/${title.replace(/ /g, `-`).toLowerCase()}`;

		actions.createPage({
			path: slug,
			component: require.resolve(`./src/templates/page.tsx`),
			context: {
				title,
				html
			}
		});
	});

	posts.forEach(({ node }, index) => {
		const { path } = node.childMarkdownRemark.frontmatter;

		actions.createPage({
			path: `/blog/${path}`,
			component: require.resolve(`./src/templates/post.tsx`),
			context: {
				pathSlug: `${path}`,
				prev: index === 0 ? null : posts[index - 1].node,
				next: index === posts.length - 1 ? null : posts[index + 1].node
			}
		});
	});

	topics.forEach(({ node }) => {
		let { slug } = node.childMarkdownRemark.fields;
		slug = slug.slice(0, -1);
		const { title } = node.childMarkdownRemark.frontmatter;

		actions.createPage({
			path: slug,
			component: require.resolve(`./src/templates/topics.tsx`),
			context: {
				title,
				posts
			}
		});
	});

	services.forEach(({ node }) => {
		const { title } = node.childMarkdownRemark.frontmatter;
		const slug = `/${title.replace(/ /g, `-`).toLowerCase()}`;

		actions.createPage({
			path: slug,
			component: require.resolve(`./src/templates/service.tsx`),
			context: {
				title
			}
		});
	});

	if (pagesData.errors || postsData.errors || servicesData.errors || topicsData.errors) {
		reporter.panicOnBuild(`Error while running GraphQL query.`);
		return;
	}
};

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
