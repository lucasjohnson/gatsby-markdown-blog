import React, { useState } from 'react';
import { IS_SELECTED } from '../constants/toggles';
import GridBox from '../components/GridBox';
import GridCard from '../components/GridCard';

const PostList: React.FC<PostProps> = ({ posts }) => {
	const postsPerPage = 5;
	const [currentPage, setPage] = useState(1);
	const indexOfLastTodo = currentPage * postsPerPage;
	const indexOfFirstTodo = indexOfLastTodo - postsPerPage;
	const currentPosts = posts.slice(indexOfFirstTodo, indexOfLastTodo);
	const pageNumbers: number[] = [];

	for (let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
		pageNumbers.push(i);
	}

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
		const targetButton = event.target as HTMLButtonElement;
		const targetNumber: number = parseInt(targetButton.innerHTML);
		const allFilterButtons: NodeListOf<HTMLButtonElement> = document.querySelectorAll(`.pagination-button`);

		allFilterButtons.forEach((button): void => {
			button.classList.remove(IS_SELECTED);
		});

		targetButton.classList.add(IS_SELECTED);
		setPage(targetNumber);
	};

	const renderCard: Function = () =>
		currentPosts.map((post, index) => {
			const { node } = post;
			const { childMarkdownRemark } = node;
			const { frontmatter } = childMarkdownRemark;

			return <GridCard data={frontmatter} key={index} />;
		});

	const renderPagination: Function = () =>
		pageNumbers.map((number, index) => {
			return (
				<li className="pagination-item" key={index}>
					<button className="pagination-button" onClick={(event) => handleClick(event)}>
						{number}
					</button>
				</li>
			);
		});

	return (
		<React.Fragment>
			<GridBox variant="grid-box" column={1} columnMd={2} columnLg={3}>
				{renderCard()}
			</GridBox>
			<ul className="pagination-items">{renderPagination()}</ul>
		</React.Fragment>
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
								src: string;
								srcSet: string;
							};
						};
					};
					path: string;
					services: [];
					title: string;
				};
			};
		};
	}[];
}
