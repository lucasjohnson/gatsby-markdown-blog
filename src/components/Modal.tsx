import React from 'react';
import ThemeContext from '../context/ThemeContext';
import Button from './Button';
import Icon from './Icon';

const Modal: React.FC<ModalProps> = ({ modalOpen }) => {
	return (
		<ThemeContext.Consumer>
			{({ modalOpen }) => (
				<div className="Modal" data-open={modalOpen}>
					<div className="modal-box">
						<div className="buttons">
							<ThemeContext.Consumer>
								{({ toggleModal }) => (
									<Button variant="icon" onClick={toggleModal}>
										<Icon type="cross" />
									</Button>
								)}
							</ThemeContext.Consumer>
						</div>
						<h2 className="heading-2">Modal Open</h2>
					</div>
				</div>
			)}
		</ThemeContext.Consumer>
	);
};

export default Modal;

interface ModalProps {
	modalOpen: boolean;
}
