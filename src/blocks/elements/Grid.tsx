import React, { FunctionComponent } from 'react';

interface GridProps {
	variant: 'grid' | 'grid-flex';
}

const Grid: FunctionComponent<GridProps> = ({ variant, children }) => {
	return <div className={variant}>{children}</div>;
};

export default Grid;
