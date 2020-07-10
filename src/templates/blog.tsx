import React from 'react';
import Layout from '../components/Layout';
import TagList from '../components/TagList';
import PostList from '../components/PostList';
import SEO from '../components/Head/SEO';

const Blog: React.FC<BlogProps> = ({ pageContext }) => {
	const { allServices, allTags, posts } = pageContext;

	return (
		<Layout>
			<SEO title="Blog" />
			<section className="Blog">
        <div className="block">
          <h1 className="heading-1">Blog</h1>
          <TagList copy="Filter posts by services:" items={allServices} variant="button" />
          <TagList copy="Filter posts by tags:" items={allTags} variant="button" />
          <PostList posts={posts} />
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
