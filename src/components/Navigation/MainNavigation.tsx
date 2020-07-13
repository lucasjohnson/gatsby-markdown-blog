import React from 'react';
import Button from '../Button';
import Icon from '../Icon';
import Navigation from './Navigation';
import ThemeContext from '../../context/ThemeContext';
import data from '../../../content/navigation/main-navigation.yml';

const MainNavigation: React.FC = () => {
	const handleClick = (): void => {};

	const { menuItems } = data;

	return (
		<React.Fragment>
			<Navigation data={menuItems} title="main" variant="inline" />
			<div className="buttons">
				<Button variant="primary" onClick={handleClick}>
					Contact
				</Button>
				<ThemeContext.Consumer>
					{({ toggleModal }) => (
						<Button variant="icon" onClick={toggleModal}>
							<Icon type="search" />
						</Button>
					)}
				</ThemeContext.Consumer>
			</div>
		</React.Fragment>
	);
};

export default MainNavigation;
