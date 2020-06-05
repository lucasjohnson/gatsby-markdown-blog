import React from 'react';

type ButtonProps = {
	value: string;
	variant: string;
};

const Button = ({ value, variant }: ButtonProps) => {
	return (
		<React.Fragment>
			<button className={`button ${variant === `primary` ? variant : `secondary`}`}>{value}</button>
		</React.Fragment>
	);
};

export default Button;
