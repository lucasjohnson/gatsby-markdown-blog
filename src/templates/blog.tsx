import React from 'react';
import Layout from '../components/Layout';
import TagList from '../components/TagList';
import PostList from '../components/PostList';
import SEO from '../components/Head/SEO';

const Blog: React.FC<BlogProps> = ({ pageContext }) => {
	const { allTags, posts } = pageContext;

	return (
		<Layout>
			<SEO title="Blog" />
			<section className="Blog block">
				<h1 className="heading-1">Blog</h1>
				<TagList copy="Filter by post tag:" items={allTags} variant="button" />
				<PostList posts={posts} />
			</section>
		</Layout>
	);
};

export default Blog;

interface BlogProps {
	pageContext: {
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
