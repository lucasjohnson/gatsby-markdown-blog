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
						<form name="contact" method="POST" data-netlify="true">
							<label>
								Your Name: <input type="text" name="name" />
							</label>
							<label>
								Your Email: <input type="email" name="email" />
							</label>
							<label>
								Message: <textarea name="message"></textarea>
							</label>
							<button type="submit">Send</button>
						</form>
					</div>
				</div>
			)}
		</ThemeContext.Consumer>
	);
};

export default ContactForm;
