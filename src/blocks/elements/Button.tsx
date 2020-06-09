import React, { FunctionComponent } from 'react';

interface ButtonProps {
	variant: 'primary' | 'secondary';
	onClick?: () => void;
}

const Button: FunctionComponent<ButtonProps> = ({ variant, onClick, children }) => {
	return (
		<button className={`button ${variant}`} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
