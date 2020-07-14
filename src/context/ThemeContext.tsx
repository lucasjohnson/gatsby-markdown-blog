import React from 'react';

const defaultState = {
	contactOpen: false,
	searchOpen: false,
	toggleContact: () => {},
	toggleSearch: () => {}
};

const ThemeContext = React.createContext(defaultState);

class ThemeProvider extends React.Component {
	state = {
		contactOpen: false,
		searchOpen: false
	};

	toggleSearch = () => {
		this.setState((prevState) => ({ searchOpen: !prevState.searchOpen, contactOpen: false }));
	};

	toggleContact = () => {
		this.setState((prevState) => ({ contactOpen: !prevState.contactOpen, searchOpen: false }));
	};

	render() {
		const { children } = this.props;
		const { contactOpen, searchOpen } = this.state;
		const bodyElement: HTMLCollectionOf<HTMLBodyElement> = document.getElementsByTagName(`body`);

		searchOpen || contactOpen ? (bodyElement[0].style.position = `fixed`) : (bodyElement[0].style.position = `static`);

		return (
			<ThemeContext.Provider
				value={{
					contactOpen,
					searchOpen,
					toggleContact: this.toggleContact,
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
