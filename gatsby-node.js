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
			allFile(filter: { relativeDirectory: { regex: "/(posts)/" } }) {
				edges {
					node {
						childMarkdownRemark {
							frontmatter {
								author
								date(formatString: "MMMM DD, YYYY")
								path
								title
								tags
								banner {
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

	const { data: tagsData } = await graphql(`
		query {
			allFile(filter: { relativeDirectory: { regex: "/(tags)/" } }) {
				edges {
					node {
						childMarkdownRemark {
							frontmatter {
								abstract
								title
							}
							html
						}
					}
				}
			}
		}
	`);

	const slugify = (string) => {
		return string.replace(/ /g, `-`).toLowerCase();
	};

	const { createPage } = actions;

	const createPageFunction = (path, component, context) => {
		createPage({
			path: path,
			component: require.resolve(component),
			context: context
		});
	};

	const pages = pagesData.allFile.edges;
	const posts = postsData.allFile.edges;
	const authors = authorsData.allFile.edges;
	const services = servicesData.allFile.edges;
	const tags = tagsData.allFile.edges;

	pages.forEach(({ node }) => {
		const { title } = node.childMarkdownRemark.frontmatter;
		const { html } = node.childMarkdownRemark;

		createPageFunction(`/${slugify(title)}`, `./src/templates/page.tsx`, { title, html });
	});

	posts.forEach(({ node }, index) => {
		const { author, date, path: postPath, tags } = node.childMarkdownRemark.frontmatter;
		const postTemplate = `./src/templates/post.tsx`;

		let postAuthor = ``;

		const context = {
			pathSlug: postPath,
			postAuthor,
			postDate: date,
			prev: index === 0 ? null : posts[index - 1].node,
			next: index === posts.length - 1 ? null : posts[index + 1].node
		};

		authors.forEach(({ node }) => {
			const { frontmatter } = node.childMarkdownRemark;
			const { title } = frontmatter;

			if (author === title) {
				postAuthor = frontmatter;
			}

			createPageFunction(`/${slugify(title)}`, `./src/templates/author.tsx`, { frontmatter });
			createPageFunction(`/${slugify(title)}/${postPath}`, postTemplate, context);
		});

		createPageFunction(postPath, postTemplate, context);

		tags.forEach((tag) => {
			createPageFunction(`/${slugify(tag)}/${postPath}`, postTemplate, context);
		});
	});

	const allTagsArray = [];

	tags.forEach(({ node }) => {
		const { title, abstract } = node.childMarkdownRemark.frontmatter;
		const { html } = node.childMarkdownRemark;

		createPageFunction(`/${slugify(title)}`, `./src/templates/tag.tsx`, { abstract, html, title });

		allTagsArray.push(title);
	});

	createPageFunction(`/blog`, `./src/templates/blog.tsx`, { posts, tags: allTagsArray });

	services.forEach(({ node }) => {
		const { title, abstract } = node.childMarkdownRemark.frontmatter;
		const { html } = node.childMarkdownRemark;

		createPageFunction(`/${slugify(title)}`, `./src/templates/service.tsx`, { title, html, abstract });
	});

	if (authorsData.errors || pagesData.errors || postsData.errors || servicesData.errors || tagsData.errors) {
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
