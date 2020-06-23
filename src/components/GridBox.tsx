import React, { FunctionComponent } from 'react';

interface GridBoxProps {
	column: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
	columnSm?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
	columnMd?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
	columnLg?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
	columnXl?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
	columnXx?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
	variant: 'grid-box';
}

const GridBox: FunctionComponent<GridBoxProps> = ({
	column,
	columnSm,
	columnMd,
	columnLg,
	columnXl,
	columnXx,
	variant,
	children
}) => {
	return (
		<div
			className={`
        ${variant}
        ${column ? `column-${column}` : ``}
        ${columnSm ? `column-sm-${columnSm}` : ``}
        ${columnMd ? `column-md-${columnMd}` : ``}
        ${columnLg ? `column-lg-${columnLg}` : ``}
        ${columnXl ? `column-xl-${columnXl}` : ``}
        ${columnXx ? `column-xx-${columnXx}` : ``}
      `}
		>
			{children}
		</div>
	);
};

export default GridBox;
