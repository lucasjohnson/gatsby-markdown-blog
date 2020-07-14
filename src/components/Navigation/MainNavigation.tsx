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
				<ThemeContext.Consumer>
					{({ toggleModal }) => (
						<Button variant="icon" onClick={toggleModal}>
							<Icon type="search" />
						</Button>
					)}
				</ThemeContext.Consumer>
				<Button variant="primary" onClick={handleClick}>
					Contact
				</Button>
			</div>
		</React.Fragment>
	);
};

export default MainNavigation;
