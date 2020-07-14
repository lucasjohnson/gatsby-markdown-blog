import React from 'react';

const defaultState = {
	searchOpen: false,
	toggleSearch: () => {}
};

const ThemeContext = React.createContext(defaultState);

class ThemeProvider extends React.Component {
	state = {
		searchOpen: false
	};

	toggleSearch = () => {
		this.setState((prevState) => ({ searchOpen: !prevState.searchOpen }));
	};

	render() {
		const { children } = this.props;
		const { searchOpen } = this.state;

		const bodyElement: HTMLCollectionOf<HTMLBodyElement> = document.getElementsByTagName(`body`);
		searchOpen ? (bodyElement[0].style.position = `fixed`) : (bodyElement[0].style.position = `static`);

		return (
			<ThemeContext.Provider
				value={{
					searchOpen,
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
