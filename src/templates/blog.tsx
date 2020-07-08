import React from 'react';
import Layout from '../components/Layout';
import TagList from '../components/TagList';
import PostList from '../components/PostList';
import SEO from '../components/Head/SEO';

const Blog: React.FC<BlogProps> = ({ pageContext }) => {
	const { posts, tags } = pageContext;

	return (
		<Layout>
			<SEO title="Blog" />
			<section className="Blog block">
				<h1 className="heading-1">Blog</h1>
				<TagList tags={tags} variant="button" />
				<PostList posts={posts} />
			</section>
		</Layout>
	);
};

export default Blog;

interface BlogProps {
	pageContext: {
		posts: {
			node: {
				childMarkdownRemark: {
					frontmatter: {
						abstract: string;
						path: string;
						tags: [];
						title: string;
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
					};
				};
			};
		}[];
		services: string[];
		tags: string[];
	};
}
