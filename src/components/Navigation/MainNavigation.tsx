import React from 'react';
import Button from '../Button';
import Navigation from './Navigation';
import data from '../../../content/navigation/main-navigation.yml';

const MainNavigation: React.FC = () => {
	const handleClick = (): void => {};

	const { menuItems } = data;

	return (
		<React.Fragment>
			<Navigation data={menuItems} title="main" variant="inline" />
			<Button variant={`primary`} onClick={handleClick}>
				Contact
			</Button>
		</React.Fragment>
	);
};

export default MainNavigation;
