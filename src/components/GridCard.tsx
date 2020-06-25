import React from 'react';
import Img from 'gatsby-image';
import Anchor from './Anchor';
import TopicsList from './TopicList';

interface GridCardProps {
	data: {
		abstract: string;
		path: string;
		title: string;
		topics: string[];
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
}

const GridCard: React.FC<GridCardProps> = ({ data }) => {
	const { abstract, banner, path, title, topics } = data;
	const { fluid } = banner.childImageSharp;

	return (
		<Anchor className="grid-card" url={path} title={title} variant="link">
			<article className="card-content">
				<Img fluid={fluid} alt={title} />
				<h2 className="heading-4">{title}</h2>
				<p className="body-copy">{abstract}</p>
				<TopicsList topics={topics} variant="span" />
			</article>
		</Anchor>
	);
};

export default GridCard;
