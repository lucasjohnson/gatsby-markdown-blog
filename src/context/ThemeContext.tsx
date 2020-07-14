import React from 'react';

const defaultState = {
	contactOpen: false,
	hamburgerOpen: false,
	searchOpen: false,
	toggleContact: () => {},
	toggleHamburger: () => {},
	toggleSearch: () => {}
};

const ThemeContext = React.createContext(defaultState);

class ThemeProvider extends React.Component {
	state = {
		contactOpen: false,
		hamburgerOpen: false,
		searchOpen: false
	};

	toggleContact = () => {
		this.setState((prevState) => ({ contactOpen: !prevState.contactOpen, hamburgerOpen: false, searchOpen: false }));
	};

	toggleHamburger = () => {
		this.setState((prevState) => ({ contactOpen: false, hamburgerOpen: !prevState.hamburgerOpen, searchOpen: false }));
	};

	toggleSearch = () => {
		this.setState((prevState) => ({ contactOpen: false, hamburgerOpen: false, searchOpen: !prevState.searchOpen }));
	};

	render() {
		const { children } = this.props;
		const { contactOpen, searchOpen, hamburgerOpen } = this.state;
		const bodyElement: HTMLCollectionOf<HTMLBodyElement> = document.getElementsByTagName(`body`);

		searchOpen || contactOpen || hamburgerOpen
			? (bodyElement[0].style.position = `fixed`)
			: (bodyElement[0].style.position = `static`);

		return (
			<ThemeContext.Provider
				value={{
					contactOpen,
					hamburgerOpen,
					searchOpen,
					toggleContact: this.toggleContact,
					toggleHamburger: this.toggleHamburger,
					toggleSearch: this.toggleSearch
				}}
			>
				{children}
			</ThemeContext.Provider>
		);
	}
}

export default ThemeContext;

export { ThemeProvider };
