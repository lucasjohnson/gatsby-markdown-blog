import React, { ReactElement } from 'react';
import { Link } from 'gatsby';
import MainNavigation from './MainNavigation';
import Button from '../../templates/elements/Button';
import siteData from '../../../content/site/data.yml';

const Header = (): ReactElement => {
	const handleClick = (): void => {};

	const { siteTitle } = siteData;

	return (
		<header className="Header">
			<div className="block">
				<div className="grid-flex">
					<div className="column-12 column-md-4">
						<h4 className="heading-4">
							<Link className="site-title" to="/" title="Hompage link">
								{siteTitle}
							</Link>
						</h4>
					</div>
					<div className="column-12 column-md-6">
						<MainNavigation />
					</div>
					<div className="column-12 column-md-2">
						<Button variant={`secondary`} onClick={handleClick}>
							Contact
						</Button>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
