import React from 'react';
import Layout from '../components/Layout';
import GridBox from '../components/GridBox';
import GridCard from '../components/GridCard';
import TagList from '../components/TagList';
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
		tags: string[];
	};
}

const Blog: React.FC<BlogProps> = ({ pageContext }) => {
	const { posts, tags } = pageContext;

	const renderCard: Function = () =>
		posts.map((post: { node: { childMarkdownRemark: { frontmatter: {} } } }, index: number) => {
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
				<TagList tags={tags} variant="button" />
				<GridBox variant="grid-box" column={1} columnMd={2} columnLg={3}>
					{renderCard()}
				</GridBox>
			</section>
		</Layout>
	);
};

export default Blog;
