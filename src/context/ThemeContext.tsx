import React, { useState } from 'react';

const defaultState = {
	contactOpen: false,
	hamburgerOpen: false,
	searchOpen: false,
	toggleContact: (): void => {},
	toggleHamburger: (): void => {},
	toggleSearch: (): void => {}
};

const ThemeContext = React.createContext(defaultState);

const ThemeProvider: React.FC = ({ children }) => {
	const [contactOpen, toggleContact] = useState(false);
	const [hamburgerOpen, toggleHamburger] = useState(false);
	const [searchOpen, toggleSearch] = useState(false);

	const bodyElement: HTMLCollectionOf<HTMLBodyElement> = document.getElementsByTagName(`body`);

	contactOpen || hamburgerOpen || searchOpen
		? (bodyElement[0].style.position = `fixed`)
		: (bodyElement[0].style.position = `static`);

	const closeAllToggles = (): void => {
		toggleContact(false);
		toggleHamburger(false);
		toggleSearch(false);
	};

	const handleContactToggle = (): void => {
		closeAllToggles();
		toggleContact(!contactOpen);
	};

	const handleHamburgerToggle = (): void => {
		closeAllToggles();
		toggleHamburger(!hamburgerOpen);
	};

	const handleSearchToggle = (): void => {
		closeAllToggles();
		toggleSearch(!searchOpen);
	};

	return (
		<ThemeContext.Provider
			value={{
				contactOpen,
				hamburgerOpen,
				searchOpen,
				toggleContact: handleContactToggle,
				toggleHamburger: handleHamburgerToggle,
				toggleSearch: handleSearchToggle
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeContext;

export { ThemeProvider };
