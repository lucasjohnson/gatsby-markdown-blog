import React from 'react';
import Layout from '../components/Layout';
import GridBox from '../components/GridBox';
import GridCard from '../components/GridCard';
import TopicList from '../components/TopicList';
import SEO from '../components/Head/SEO';

interface BlogProps {
	pageContext: {
		posts: {
			node: {
				childMarkdownRemark: {
					frontmatter: {
						abstract: string;
						date: string;
						path: string;
						title: string;
						topics?: string[];
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
		};
	};
}

const Blog: React.FC<BlogProps> = ({ pageContext }) => {
	const { posts, topics } = pageContext;

	const renderCard: Function = () =>
		posts.map((post, index) => {
			const { node } = post;
			const { childMarkdownRemark } = node;
			const { frontmatter } = childMarkdownRemark;
			return <GridCard data={frontmatter} key={index} />;
		});

	return (
		<Layout>
			<SEO title="Blog" />
			<section className="Blog block">
				<h1 className="heading-1">Blog</h1>
				<TopicList topics={topics} variant="span" />
				<GridBox variant="grid-box" column={1} columnMd={2} columnLg={3}>
					{renderCard()}
				</GridBox>
			</section>
		</Layout>
	);
};

export default Blog;
