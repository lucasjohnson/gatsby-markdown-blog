import React from 'react';

const Button: React.FC<ButtonProps> = ({ children, className, onClick, variant }) => {
	return (
		<button className={`${className ? `${className} ` : ``}button ${variant}`} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;

interface ButtonProps {
  className?: string;
  onClick?: () => void;
	variant: 'primary' | 'secondary';
}
