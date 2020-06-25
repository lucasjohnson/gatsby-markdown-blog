const createTopicPages = (createPage, posts) => {
	const postsByTopic = {};
	const baseUrl = `/blog/topics`;

	posts.forEach(({ node }) => {
		if (node.childMarkdownRemark.frontmatter.topics) {
			node.childMarkdownRemark.frontmatter.topics.forEach((topic) => {
				if (!postsByTopic[topic]) {
					postsByTopic[topic] = [];
				}

				postsByTopic[topic].push(node);
			});
		}
	});

	const topics = Object.keys(postsByTopic);

	createPage({
		path: baseUrl,
		component: require.resolve(`./src/templates/topics.tsx`),
		context: {
			topics: topics.sort()
		}
	});

	topics.forEach((topic) => {
		const posts = postsByTopic[topic];

		createPage({
			path: `${baseUrl}/${topic.replace(/ /g, `-`).toLowerCase()}`,
			component: require.resolve(`./src/templates/topic.tsx`),
			context: posts,
			topic
		});
	});
};

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
								author
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
								email
								title
								twitter
								website
								image {
									childImageSharp {
										fluid {
											base64
											aspectRatio
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
								abstract
							}
							html
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
	const { createPage } = actions;

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

	createTopicPages(createPage, posts);

	posts.forEach(({ node }, index) => {
		const { author, path } = node.childMarkdownRemark.frontmatter;

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
				prev: index === 0 ? null : posts[index - 1].node,
				next: index === posts.length - 1 ? null : posts[index + 1].node,
				postAuthor
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

	if (pagesData.errors || postsData.errors || servicesData.errors || topicsData.errors) {
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
