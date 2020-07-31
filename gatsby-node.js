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
								abstract
								author
								banner {
									childImageSharp {
										fluid {
											aspectRatio
											base64

											sizes
											src
											srcSet
										}
									}
								}
								date(formatString: "MMMM DD, YYYY")
								path
								services
								tags
								title
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

	const removeParentPost = (relatedPosts, parentPostTitle) => {
		return relatedPosts.filter(
			(relatedPost) => relatedPost.node.childMarkdownRemark.frontmatter.title !== parentPostTitle
		);
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

	const allServicesArray = [];

	services.forEach(({ node }) => {
		const { title, abstract } = node.childMarkdownRemark.frontmatter;
		const { html } = node.childMarkdownRemark;

		createPageFunction(`/${slugify(title)}`, `./src/templates/service.tsx`, {
			abstract,
			html,
			allServices: allServicesArray,
			title,
			relatedPosts: filteredPosts(posts, `services`, title)
		});

		allServicesArray.push(title);
	});

	const allTagsArray = [];

	tags.forEach(({ node }) => {
		const { title, abstract } = node.childMarkdownRemark.frontmatter;
		const { html } = node.childMarkdownRemark;

		createPageFunction(`/${slugify(title)}`, `./src/templates/tag.tsx`, {
			abstract,
			allTags: allTagsArray,
			html,
			title,
			relatedPosts: filteredPosts(posts, `tags`, title)
		});

		allTagsArray.push(title);
	});

	posts.forEach(({ node }, index) => {
		const { frontmatter, html } = node.childMarkdownRemark;
		const { author, path, services, title: parentPostTitle, tags } = frontmatter;
		const postTemplate = `./src/templates/post.tsx`;
		const postPath = slugify(path);

		let postAuthor = ``;

		authors.forEach(({ node }) => {
			const { frontmatter, html } = node.childMarkdownRemark;
			const { title } = frontmatter;

			if (author === title) {
				frontmatter.html = html;
				postAuthor = frontmatter;
			}

			createPageFunction(`/${slugify(title)}`, `./src/templates/author.tsx`, {
				frontmatter,
				html,
				relatedPosts: filteredPosts(posts, `author`, title)
			});
		});

		let relatedPosts = [];
		let allTags = [];

		tags.forEach((tag) => {
			relatedPosts = filteredPosts(posts, `tags`, tag);
			allTags.push(tag);
		});

		services.forEach((service) => {
			relatedPosts = filteredPosts(posts, `services`, service);
		});

		const context = {
			allTags: allTagsArray,
			frontmatter,
			html,
			postAuthor,
			postNext: index === posts.length - 1 ? null : posts[index + 1].node,
			postPrev: index === 0 ? null : posts[index - 1].node,
			relatedPosts: removeParentPost(relatedPosts, parentPostTitle)
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

	createPageFunction(`/blog`, `./src/templates/blog.tsx`, {
		allServices: allServicesArray,
		allTags: allTagsArray,
		posts
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
		const value = createFilePath({ node, getNode });
		createNodeField({
			name: `slug`,
			node,
			value
		});
	}
};
