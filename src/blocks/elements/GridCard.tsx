import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';

interface GridCardProps {
	data: { abstract: string; banner: string; data: string; title: string };
}

const GridCard: FunctionComponent<GridCardProps> = ({ data }) => {
	return (
		<Link className="grid-card" to="/" title={data.title}>
			<article className="card-content">
				<h4 className="heading-4">{data.title}</h4>
				<p className="body-copy">{data.abstract}</p>
				<span className="tag">Test</span>
			</article>
		</Link>
	);
};

export default GridCard;
