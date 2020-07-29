import React, { useState } from 'react';
import Layout from '../components/Layout';
import Pagination from '../components/Navigation/Pagination';
import PostList from '../components/PostList';
import SEO from '../components/Head/SEO';
import TagList from '../components/TagList';

const Blog: React.FC<BlogProps> = ({ pageContext }) => {
	const { allServices, allTags, posts } = pageContext;

	const [filters, setFilter] = useState([]);

	const filterPostsByTag = (item: string): void => {
		filters.includes(item) ? setFilter(filters.filter((filter) => filter !== item)) : setFilter(filters.concat(item));
	};

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
						filterPostsByTag={filterPostsByTag}
					/>
					<TagList copy="Filter posts by tags:" items={allTags} variant="button" filterPostsByTag={filterPostsByTag} />
					<PostList posts={posts} />
					<Pagination posts={posts} />
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
						serivces: [];
						title: string;
					};
				};
			};
		}[];
	};
}
