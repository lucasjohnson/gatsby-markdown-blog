import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';

interface GridCardProps {
	data: { abstract: string; banner: string; slug: string; title: string };
}

const GridCard: FunctionComponent<GridCardProps> = ({ data }) => {
	const { abstract, banner, slug, title } = data;

	return (
		<Link className="grid-card" to={slug} title={title}>
			<article className="card-content">
				<h4 className="heading-4">{title}</h4>
				<p className="body-copy">{abstract}</p>
				<span className="tag">Test</span>
			</article>
		</Link>
	);
};

export default GridCard;
