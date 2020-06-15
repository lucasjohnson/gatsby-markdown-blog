import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

interface GridCardProps {
	data: {
		abstract: string;
		slug: string;
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
}

const GridCard: FunctionComponent<GridCardProps> = ({ data }) => {
	const { abstract, banner, slug, title } = data;
	const { fluid } = banner.childImageSharp;

	return (
		<Link className="grid-card" to={slug} title={title}>
			<article className="card-content">
				<Img fluid={fluid} alt={title} />
				<h4 className="heading-4">{title}</h4>
				<p className="body-copy">{abstract}</p>
				<span className="tag">Test</span>
			</article>
		</Link>
	);
};

export default GridCard;
