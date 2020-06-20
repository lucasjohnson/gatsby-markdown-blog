import React from 'react';
import { Link } from 'gatsby';
import mainMenuData from '../../../content/navigation/main-navigation.yml';
import slugify from '../../helpers/utils';

const MainNavigation: React.FC = () => {
	const renderDropdownItems: Function = (dropdownItems: [], dropdownTitle: string) =>
		dropdownItems.map((item: { item: string }, index: number) => {
			const { item: title } = item;

			return (
				<li className="dropdown-item" key={index}>
					<Link
						className="dropdown-link"
						to={`/${slugify(dropdownTitle)}/${slugify(title)}`}
						title={`Link to ${title} page`}
					>
						{title}
					</Link>
				</li>
			);
		});

	const { mainMenuItems } = mainMenuData;

	const renderMainMenuItems: Function = () =>
		mainMenuItems.map((item: { item: string; dropdownItems: {}[] }, index: number) => {
			const { item: title } = item;

			return (
				<li className="navigation-item" key={index}>
					<Link className="navigation-link" to={`/${slugify(title)}`} title={`Link to ${title} page`}>
						{title}
					</Link>
					{item.dropdownItems && <ul className="dropdown-items">{renderDropdownItems(item.dropdownItems, title)}</ul>}
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
