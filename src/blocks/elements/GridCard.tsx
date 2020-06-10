import React, { FunctionComponent } from 'react';

interface GridCardProps {
	data: { title: string; copy: string; tag: string };
}

const GridCard: FunctionComponent<GridCardProps> = ({ data }) => {
	const { title, copy, tag } = data;
	return (
		<a href="/" className="grid-card">
			<article className="card-content">
				<h4 className="heading-4">{title}</h4>
				<p className="body-copy">{copy}</p>
				<span className="tag">{tag}</span>
			</article>
		</a>
	);
};

export default GridCard;
