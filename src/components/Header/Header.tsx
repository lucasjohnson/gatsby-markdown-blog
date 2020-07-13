import React from 'react';
import Anchor from '../Anchor';
import MainNavigation from '../Navigation/MainNavigation';
import siteData from '../../../content/site/data.yml';

const Header: React.FC = () => {
	const { siteTitle } = siteData;

	return (
		<header className="Header block">
			<span className="site-heading">
				<Anchor url="/" title="Hompage" variant="link">
					{siteTitle}
				</Anchor>
			</span>
			<MainNavigation />
		</header>
	);
};

export default Header;
