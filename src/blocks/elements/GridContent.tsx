import React, { FunctionComponent } from 'react';

interface GridContentProps {
	data: { title: string; copy: string };
}

const GridContent: FunctionComponent<GridContentProps> = ({ data }) => {
	const { title, copy } = data;
	return (
		<div>
			<h3 className="heading-3">{title}</h3>
			<p className="body-copy">{copy}</p>
		</div>
	);
};

export default GridContent;
