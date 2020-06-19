import React from 'react';
import { Link } from 'gatsby';
import mainMenu from '../../../content/site/main-navigation.yml';

const MainNavigation: React.FC = () => {
	const renderMenuItems: Function = () => {
		return (
			<li className="navigation-item">
				<Link className="navigation-link" to="/blog" title="Blog page link">
					Blog
				</Link>
			</li>
		);
	};
	return (
		<nav className="main-navigation">
			<ul className="navigation-items">{renderMenuItems()}</ul>
		</nav>
	);
};

export default MainNavigation;
