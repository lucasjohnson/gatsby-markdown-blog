import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';

interface GridCardProps {
	data: { title: string; copy: string; tag: string };
}

const GridCard: FunctionComponent<GridCardProps> = ({ data }) => {
	const { title, copy, tag } = data;
	return (
		<Link className="grid-card" to="/" title={title}>
			<article className="card-content">
				<h4 className="heading-4">{title}</h4>
				<p className="body-copy">{copy}</p>
				<span className="tag">{tag}</span>
			</article>
		</Link>
	);
};

export default GridCard;
