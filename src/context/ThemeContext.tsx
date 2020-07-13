import React from 'react';

const defaultState = {
	modalOpen: false,
	toggleModal: () => {}
};

const ThemeContext = React.createContext(defaultState);

class ThemeProvider extends React.Component {
	state = {
		modalOpen: false
	};

	toggleModal = () => {
		this.setState((prevState) => ({ modalOpen: !prevState.modalOpen }));
	};

	render() {
		const { children } = this.props;
		const { modalOpen } = this.state;

		return (
			<ThemeContext.Provider
				value={{
					modalOpen,
					toggleModal: this.toggleModal
				}}
			>
				{children}
			</ThemeContext.Provider>
		);
	}
}

export default ThemeContext;

export { ThemeProvider };
