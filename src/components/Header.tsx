import React, { ReactElement } from 'react';
import { Link } from 'gatsby';
import Button from '../templates/elements/Button';
import siteData from '../../content/site/data.yml';

const Header = (): ReactElement => {
	const handleClick = (): void => {};

	const { siteTitle } = siteData;

	return (
		<header>
			<div className="block">
				<div className="grid-flex">
					<div className="column-12">
						<h4 className="heading-4">
							<Link className="site-title" to="/" title="Hompage link">
								{siteTitle}
							</Link>
						</h4>
						<nav className="main-navigation">
							<ul className="navigation-items">
								<li className="navigation-item">
									<Link className="navigation-link" to="/blog" title="Blog page link">
										Blog
									</Link>
								</li>
							</ul>
						</nav>
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
