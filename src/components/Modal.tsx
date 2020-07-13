import React from 'react';
import ThemeContext from '../context/ThemeContext';

const Modal: React.FC<ModalProps> = ({ modalOpen }) => {
	return (
		<ThemeContext.Consumer>
			{({ modalOpen }) => (
				<div className="Modal" data-open={modalOpen}>
					<h2 className="heading-2">Modal Open</h2>
				</div>
			)}
		</ThemeContext.Consumer>
	);
};

export default Modal;

interface ModalProps {
	modalOpen: boolean;
}
