const { fmImagesToRelative } = require(`gatsby-remark-relative-images`);
const { createFilePath } = require(`gatsby-source-filesystem`);

const createTagPages = (createPage, posts) => {
	const postsByTag = {};

	posts.forEach(({ node }) => {
		if (node.frontmatter.tags) {
			node.frontmatter.tags.forEach((tag) => {
				if (!postsByTag[tag]) {
					postsByTag[tag] = [];
				}

				postsByTag[tag].push(node);
			});
		}
	});

	const tags = Object.keys(postsByTag);

	tags.forEach((tag) => {
		tag = tag.replace(/ /g, `-`);
		createPage({
			path: `/tags/${tag.toLowerCase()}`,
			component: require.resolve(`./src/templates/tag.tsx`),
			context: {
				posts,
				tag
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
							slug
							tags
						}
					}
				}
			}
		}
	`);

	const posts = data.allMarkdownRemark.edges;
	createTagPages(actions.createPage, posts);

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
