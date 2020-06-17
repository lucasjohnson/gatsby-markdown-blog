const { fmImagesToRelative } = require(`gatsby-remark-relative-images`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ actions, graphql, reporter }) => {
	const { data } = await graphql(`
		query {
			allMarkdownRemark(filter: { fileAbsolutePath: { regex: "content/blog/" } }) {
				edges {
					node {
						frontmatter {
							title
							slug
						}
					}
				}
			}
		}
	`);

	const posts = data.allMarkdownRemark.edges;

	posts.forEach(({ node }, index) => {
		const { slug } = node.frontmatter;

		actions.createPage({
			path: `/blog/${slug}`,
			component: require.resolve(`./src/templates/post.tsx`),
			context: {
				pathSlug: `${slug}`,
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
