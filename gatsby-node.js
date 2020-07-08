exports.createPages = async ({ actions, graphql, reporter }) => {
	const { data: authorsData } = await graphql(`
		query {
			allFile(filter: { relativeDirectory: { regex: "/(authors)/" } }) {
				edges {
					node {
						childMarkdownRemark {
							html
							frontmatter {
								title
								twitter
								abstract
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
							html
							frontmatter {
								author
								date(formatString: "MMMM DD, YYYY")
								path
								title
								services
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

	const filteredPosts = (posts, type, title) => {
		return posts.filter((post) => post.node.childMarkdownRemark.frontmatter[type].includes(title));
	};

	const { createPage } = actions;

	const createPageFunction = (path, component, context) => {
		createPage({
			path: path,
			component: require.resolve(component),
			context: context
		});
	};

	const authors = authorsData.allFile.edges;
	const pages = pagesData.allFile.edges;
	const posts = postsData.allFile.edges;
	const services = servicesData.allFile.edges;
	const tags = tagsData.allFile.edges;

	pages.forEach(({ node }) => {
		const { title } = node.childMarkdownRemark.frontmatter;
		const { html } = node.childMarkdownRemark;

		createPageFunction(`/${slugify(title)}`, `./src/templates/page.tsx`, { title, html });
	});

	posts.forEach(({ node }, index) => {
		const { frontmatter, html } = node.childMarkdownRemark;
		const { author, path, services, tags } = frontmatter;
		const postTemplate = `./src/templates/post.tsx`;
		const postPath = slugify(path);

		let postAuthor = ``;

		authors.forEach(({ node }) => {
			const { frontmatter, html } = node.childMarkdownRemark;
			const { title } = frontmatter;

			if (author === title) {
				postAuthor = frontmatter;
			}

			createPageFunction(`/${slugify(title)}`, `./src/templates/author.tsx`, {
				frontmatter,
				html,
				posts: filteredPosts(posts, `author`, title)
			});
		});

		let relatedPosts = [];

		tags.forEach((tag) => {
			relatedPosts = filteredPosts(posts, `tags`, tag);
			console.log(relatedPosts);
		});

		services.forEach((service) => {
			relatedPosts = filteredPosts(posts, `services`, service);
			console.log(relatedPosts);
		});

		const context = {
			frontmatter,
			html,
			postAuthor,
			prev: index === 0 ? null : posts[index - 1].node,
			next: index === posts.length - 1 ? null : posts[index + 1].node,
			relatedPosts
		};

		createPageFunction(postPath, postTemplate, context);
		createPageFunction(`/${slugify(author)}/${postPath}`, postTemplate, context);

		services.forEach((service) => {
			createPageFunction(`/${slugify(service)}/${postPath}`, postTemplate, context);
		});

		tags.forEach((tag) => {
			createPageFunction(`/${slugify(tag)}/${postPath}`, postTemplate, context);
		});
	});

	const allTagsArray = [];

	services.forEach(({ node }) => {
		const { title, abstract } = node.childMarkdownRemark.frontmatter;
		const { html } = node.childMarkdownRemark;

		createPageFunction(`/${slugify(title)}`, `./src/templates/service.tsx`, {
			abstract,
			html,
			title,
			posts: filteredPosts(posts, `services`, title)
		});
	});

	tags.forEach(({ node }) => {
		const { title, abstract } = node.childMarkdownRemark.frontmatter;
		const { html } = node.childMarkdownRemark;

		createPageFunction(`/${slugify(title)}`, `./src/templates/tag.tsx`, {
			abstract,
			html,
			title,
			posts: filteredPosts(posts, `tags`, title)
		});

		allTagsArray.push(title);
	});

	createPageFunction(`/blog`, `./src/templates/blog.tsx`, { posts, tags: allTagsArray });

	if (authorsData.errors || pagesData.errors || postsData.errors || servicesData.errors || tagsData.errors) {
		reporter.panicOnBuild(`Error while running GraphQL query.`);
		return;
	}
};

const { fmImagesToRelative } = require(`gatsby-remark-relative-images`);

exports.onCreateNode = ({ node, actions }) => {
	const { createNodeField } = actions;
	fmImagesToRelative(node);

	if (node.internal.type === `MarkdownRemark`) {
		createNodeField({
			node
		});
	}
};
