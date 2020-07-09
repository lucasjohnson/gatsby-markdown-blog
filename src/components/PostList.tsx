import React from 'react';
import GridBox from '../components/GridBox';
import GridCard from '../components/GridCard';

const PostList: React.FC<PostProps> = ({ posts }) => {
	const renderCard: Function = () =>
		posts.map((post, index) => {
			const { node } = post;
			const { childMarkdownRemark } = node;
			const { frontmatter } = childMarkdownRemark;

      console.log("Post List", frontmatter);

			return <GridCard data={frontmatter} key={index} />;
		});

	return (
		<GridBox variant="grid-box" column={1} columnMd={2} columnLg={3}>
			{renderCard()}
		</GridBox>
	);
};

export default PostList;

interface PostProps {
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
}
