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

	topics.forEach((topic) => {
		topic = topic.replace(/ /g, `-`);
		createPage({
			path: `/topic/${topic.toLowerCase()}`,
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
	fmImagesToRelative(node);
	const { createNodeField } = actions;

	if (node.internal.type === `MarkdownRemark`) {
		const value = createFilePath({ node, getNode });
		createNodeField({
			node,
			value
		});
	}
};
