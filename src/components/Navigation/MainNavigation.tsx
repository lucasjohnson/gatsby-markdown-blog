import React from 'react';
import Button from '../Button';
import Icon from '../Icon';
import Navigation from './Navigation';
import ThemeContext from '../../context/ThemeContext';
import data from '../../../content/navigation/main-navigation.yml';

const MainNavigation: React.FC = () => {
	const { menuItems } = data;

	return (
		<React.Fragment>
			<Navigation data={menuItems} title="main" variant="inline" />
			<ThemeContext.Consumer>
				{({ toggleContact, toggleHamburger, toggleSearch }) => (
					<div className="buttons">
						<Button variant="icon" onClick={toggleSearch}>
							<Icon type="search" />
						</Button>
						<Button variant="primary" onClick={toggleContact}>
							Contact
						</Button>
						<Button variant="icon" onClick={toggleHamburger}>
							<Icon type="hamburger" />
						</Button>
					</div>
				)}
			</ThemeContext.Consumer>
		</React.Fragment>
	);
};

export default MainNavigation;
