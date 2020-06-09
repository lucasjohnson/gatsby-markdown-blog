import React, { FunctionComponent } from 'react';

interface ButtonProps {
	variant: 'primary' | 'secondary';
	onClick(event: React.MouseEvent<HTMLButtonElement>): React.ReactNode;
}

const Button: FunctionComponent<ButtonProps> = ({ variant, onClick, children }) => {
	return (
		<React.Fragment>
			<button className={`button ${variant}`} onClick={onClick}>
				{children}
			</button>
		</React.Fragment>
	);
};

export default Button;
