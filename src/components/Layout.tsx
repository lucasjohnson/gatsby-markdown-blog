import React from 'react';
import ThemeContext from '../context/ThemeContext';
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
		<ThemeContext.Consumer>{({ searchOpen }) => <SearchForm searchOpen={searchOpen} />}</ThemeContext.Consumer>
	</React.Fragment>
);

export default Layout;
