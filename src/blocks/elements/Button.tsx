import React, { FunctionComponent } from 'react';

const Button: FunctionComponent<{ variant: string; handleClick?: () => void }> = ({
	variant,
	handleClick,
	children
}) => {
	return (
		<React.Fragment>
			<button className={`button ${variant}`} onClick={handleClick}>
				{children}
			</button>
		</React.Fragment>
	);
};

export default Button;
