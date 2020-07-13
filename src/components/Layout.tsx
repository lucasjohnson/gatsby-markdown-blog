import React from 'react';
import ThemeContext from '../context/ThemeContext';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Modal from './Modal';

const Layout: React.FC = ({ children }) => (
	<React.Fragment>
		<a className="skip-button" href="#mainContent">
			Skip to main content
		</a>
		<Header />
		<main className="Main" id="mainContent">
			{children}
		</main>
		<Footer />
		<ThemeContext.Consumer>{({ modalOpen }) => <Modal modalOpen={modalOpen} />}</ThemeContext.Consumer>
	</React.Fragment>
);

export default Layout;
