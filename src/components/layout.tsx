import React, { FunctionComponent } from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout: FunctionComponent = ({ children }) => (
	<div className="layout">
		<Header />
		<main id="mainContent">{children}</main>
		<Footer />
	</div>
);

export default Layout;
