import React, { FunctionComponent } from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout: FunctionComponent = ({ children }) => (
	<React.Fragment>
		<Header />
		<main id="mainContent">{children}</main>
		<Footer />
	</React.Fragment>
);

export default Layout;
