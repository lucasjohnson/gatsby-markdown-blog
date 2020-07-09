import React from 'react';
import Img from 'gatsby-image';
import Anchor from './Anchor';
import TagList from './TagList';

const GridCard: React.FC<GridCardProps> = ({ data }) => {
	const { abstract, banner, path, title, services } = data;
	const { fluid } = banner.childImageSharp;

	return (
		<Anchor className="grid-card" url={`/${path}`} title={title} variant="link">
			<article className="card-content">
				<Img fluid={fluid} alt={title} />
				<h2 className="heading-4">{title}</h2>
				<p className="body-copy">{abstract}</p>
				<TagList items={services} variant="span" />
			</article>
		</Anchor>
	);
};

export default GridCard;

interface GridCardProps {
	data: {
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
		title: string;
	};
}
