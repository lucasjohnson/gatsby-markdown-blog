import React from 'react';
import ThemeContext from '../context/ThemeContext';
import Button from './Button';
import Icon from './Icon';

const ContactForm: React.FC = () => {
	return (
		<ThemeContext.Consumer>
			{({ contactOpen, toggleContact }) => (
				<div className="ContactForm" data-open={contactOpen}>
					<div className="contact-box">
						<div className="buttons">
							<Button variant="icon" onClick={toggleContact}>
								<Icon type="cross" />
							</Button>
						</div>
						<h2 className="heading-2">Contact Form</h2>
					</div>
				</div>
			)}
		</ThemeContext.Consumer>
	);
};

export default ContactForm;
