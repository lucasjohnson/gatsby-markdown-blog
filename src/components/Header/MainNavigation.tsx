import React from 'react';
import Navigation from '../Navigation';
import data from '../../../content/navigation/main-navigation.yml';

const MainNavigation: React.FC = () => {
	const { menuItems } = data;
	return <Navigation data={menuItems} title="main" variant="inline" />;
};

export default MainNavigation;
