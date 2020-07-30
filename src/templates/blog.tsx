import React, { useState } from 'react';
import Layout from '../components/Layout';
import PostList from '../components/PostList';
import SEO from '../components/Head/SEO';
import TagList from '../components/TagList';

const Blog: React.FC<BlogProps> = ({ pageContext }) => {
	const { allServices, allTags, posts } = pageContext;
	const [filters, setFilter] = useState([]);
	const filteredPosts: [] = [];

	const filterPosts = filters.forEach((filter) => {
		posts.forEach((post) => {
			if (
				post.node.childMarkdownRemark.frontmatter.tags.includes(filter) ||
				post.node.childMarkdownRemark.frontmatter.services.includes(filter)
			) {
				filteredPosts.includes(post) ? null : filteredPosts.push(post);
			}
		});
	});

	const handleFilterClick = (event: MouseEvent, item?: string): void => {
		const allFilters = allServices.concat(allTags);
		const allFilterButtons = document.querySelectorAll(`.tag-list-button`);
		const targetedButton = event.target as HTMLButtonElement;
		const IS_SELECTED = `isSelected`;

		targetedButton && targetedButton.classList.toggle(IS_SELECTED);

		if (filters.length + 1 === allFilters.length) {
			setFilter([]);

			allFilterButtons.forEach((button) => {
				button.classList.remove(IS_SELECTED);
			});
		} else {
			filters.includes(item) ? setFilter(filters.filter((filter) => filter !== item)) : setFilter(filters.concat(item));
		}
	};

	const renderPosts = filteredPosts.length === 0 ? posts : filteredPosts;

	return (
		<Layout>
			<SEO title="Blog" />
			<section className="Blog">
				<div className="block">
					<h1 className="heading-1">Blog</h1>
					<TagList
						copy="Filter posts by services:"
						items={allServices}
						variant="button"
						onClickFunction={handleFilterClick}
					/>
					<TagList copy="Filter posts by tags:" items={allTags} variant="button" onClickFunction={handleFilterClick} />
					<PostList posts={renderPosts} />
				</div>
			</section>
		</Layout>
	);
};

export default Blog;

interface BlogProps {
	pageContext: {
		allServices: string[];
		allTags: string[];
		posts: {
			node: {
				childMarkdownRemark: {
					frontmatter: {
						abstract: string;
						banner: {
							childImageSharp: {
								fluid: {
									aspectRatio: number;
									base64: string;
									sizes: string;
									srcSet: string;
								};
							};
						};
						path: string;
						services: string[];
						tags: string[];
						title: string;
					};
				};
			};
		}[];
	};
}
