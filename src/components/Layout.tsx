import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const Layout: React.FC = ({ children }) => (
	<React.Fragment>
		<a className="skip-button" href="#mainContent">
			Skip to main content
		</a>
		<Header />
		<main className="main-content" id="mainContent">{children}</main>
		<Footer />
	</React.Fragment>
);

export default Layout;
