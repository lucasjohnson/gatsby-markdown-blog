import React from 'react';
import { Link } from 'gatsby';
import mainMenuData from '../../../content/site/main-navigation.yml';

const MainNavigation: React.FC = () => {
	const renderDropdownItems: Function = (dropdownItems: []) =>
		dropdownItems.map((item: { page: string }, index: number) => {
			const { page: title } = item;

			return (
				<li className="dropdown-item" key={index}>
					<Link className="dropdown-link" to={`/`} title={`Link to ${title} page`}>
						{title}
					</Link>
				</li>
			);
		});

	const { mainMenuItems } = mainMenuData;

	const renderMainMenuItems: Function = () =>
		mainMenuItems.map((item: { page: string; dropdownItems: {}[] }, index: number) => {
			const { page: title } = item;

			return (
				<li className="navigation-item" key={index}>
					<Link className="navigation-link" to={`/`} title={`Link to ${title} page`}>
						{title}
					</Link>
					{item.dropdownItems && <ul className="dropdown-items">{renderDropdownItems(item.dropdownItems)}</ul>}
				</li>
			);
		});

	return (
		<nav className="main-navigation">
			<ul className="navigation-items">{renderMainMenuItems()}</ul>
		</nav>
	);
};

export default MainNavigation;
