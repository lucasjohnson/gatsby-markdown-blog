exports.createPages = async ({ actions, graphql, reporter }) => {
	const { data } = await graphql(`
		query {
			allMarkdownRemark {
				edges {
					node {
						fields {
							slug
						}
						frontmatter {
							title
						}
					}
				}
			}
		}
	`);

	const posts = data.allMarkdownRemark.edges;

	posts.forEach(({ node }, index) => {
		const slug = node.fields.slug;
		actions.createPage({
			path: slug,
			component: require.resolve(`./src/templates/post.tsx`),
			context: {
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

const { fmImagesToRelative } = require(`gatsby-remark-relative-images`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, actions, getNode }) => {
	fmImagesToRelative(node);
	const { createNodeField } = actions;
	if (node.internal.type === `MarkdownRemark`) {
		const value = createFilePath({ node, getNode });
		createNodeField({
			name: `slug`,
			node,
			value
		});
	}
};
