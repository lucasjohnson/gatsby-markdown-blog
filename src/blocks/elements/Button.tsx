import React from 'react';

type ButtonProps = {
	value: string;
	variant: string;
	handleClick?: () => void;
};

const Button = ({ value, variant, handleClick }: ButtonProps) => {
	return (
		<React.Fragment>
			<button
				className={`${variant === `primary` ? `button primary` : `button secondary`}`}
				onClick={handleClick && handleClick}
			>
				{value}
			</button>
		</React.Fragment>
	);
};

export default Button;
