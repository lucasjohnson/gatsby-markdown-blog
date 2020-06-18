import React from 'react';
import { Link } from 'gatsby';
import Breadcrumbs from './Breadcrumbs';

const Footer: React.FC = () => {
	return (
		<footer>
			<div className="block">
				<div className="grid-flex">
					<div className="column-12">
						<nav className="breadcrumb-navigation">
							<ul className="breadcrumb-items">
								<Breadcrumbs />
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
