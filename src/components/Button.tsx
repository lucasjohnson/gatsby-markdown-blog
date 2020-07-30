import React from 'react';

const Button: React.FC<ButtonProps> = ({ children, className, onClickFunction, variant }) => {
	return (
		<button
			className={`${className ? ` ${className} ` : ``}button${variant ? ` ${variant}` : ``}`}
			onClick={onClickFunction}
		>
			{children}
		</button>
	);
};

export default Button;

interface ButtonProps {
	className?: string;
	onClickFunction?: () => void;
	variant?: 'icon' | 'primary' | 'secondary';
}
