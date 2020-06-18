const { fmImagesToRelative } = require(`gatsby-remark-relative-images`);
const { createFilePath } = require(`gatsby-source-filesystem`);

const createTopicPages = (createPage, posts) => {
	const postsByTopic = {};

	posts.forEach(({ node }) => {
		if (node.frontmatter.topics) {
			node.frontmatter.topics.forEach((topic) => {
				if (!postsByTopic[topic]) {
					postsByTopic[topic] = [];
				}

				postsByTopic[topic].push(node);
			});
		}
	});

	const topics = Object.keys(postsByTopic);
	const { path } = node.fields;

	topics.forEach((topic) => {
		createPage({
			path: path,
			component: require.resolve(`./src/templates/topic.tsx`),
			context: {
				posts,
				topic
			}
		});
	});
};

exports.createPages = async ({ actions, graphql, reporter }) => {
	const { data } = await graphql(`
		query {
			allMarkdownRemark(filter: { fileAbsolutePath: { regex: "content/blog/" } }) {
				edges {
					node {
						fields {
							path
						}
						frontmatter {
							title
							path
							topics
						}
					}
				}
			}
		}
	`);

	const posts = data.allMarkdownRemark.edges;
	createTopicPages(actions.createPage, posts);

	posts.forEach(({ node }, index) => {
		const { path } = node.frontmatter;

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

	if (data.errors) {
		reporter.panicOnBuild(`Error while running GraphQL query.`);
		return;
	}
};

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions;
	fmImagesToRelative(node);

	if (node.internal.type === `MarkdownRemark`) {
		const path = createFilePath({ node, getNode });

		createNodeField({
			node,
			name: `path`,
			value: path
		});
	}
};
