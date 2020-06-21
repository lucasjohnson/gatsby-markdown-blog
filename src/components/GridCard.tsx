import React, { FunctionComponent, ReactElement } from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

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

const GridCard: FunctionComponent<GridCardProps> = ({ data }) => {
	const { abstract, banner, path, title, topics } = data;
	const { fluid } = banner.childImageSharp;

	const renderTopics = (): FunctionComponent =>
		topics.map((topic: string, index: number) => {
			return (
				<li className="topic" key={index}>
					{topic}
				</li>
			);
		});

	return (
		<Link className="grid-card" to={path} title={title}>
			<article className="card-content">
				<Img fluid={fluid} alt={title} />
				<h4 className="heading-4">{title}</h4>
				<p className="body-copy">{abstract}</p>
				<ul className="topics">{renderTopics()}</ul>
			</article>
		</Link>
	);
};

export default GridCard;
