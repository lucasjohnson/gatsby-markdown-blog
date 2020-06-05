import React, { FunctionComponent } from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout: FunctionComponent = ({ children }) => (
	<React.Fragment>
		<a className="skip-button" href="#mainContent">
			Skip to main content
		</a>
		<Header />
		<main id="mainContent">{children}</main>
		<Footer />
	</React.Fragment>
);

export default Layout;
