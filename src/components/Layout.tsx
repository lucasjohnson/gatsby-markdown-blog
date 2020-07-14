import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import SearchForm from './SearchForm';

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
		<SearchForm />
	</React.Fragment>
);

export default Layout;
