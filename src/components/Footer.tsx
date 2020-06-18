import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';

const Footer: FunctionComponent = () => {
	const pathname: string = typeof window !== `undefined` ? window.location.pathname : ``;
	const pathCrumbs: string[] = pathname.split(`/`);

	pathname.length === 1 && pathCrumbs.pop();

	const renderBreadcrumbs = () =>
		pathCrumbs.map((crumb: string, index: number) => {
			return (
				<li className="breadcrumb-item" key={index}>
					<Link
						className="breadcrumb-link"
						to={`/${crumb && crumb}`}
						title={`Link to ${crumb.length === 0 ? `Home` : crumb} page`}
					>
						{crumb.length === 0 ? `Home` : crumb}
					</Link>
				</li>
			);
		});

	return (
		<footer>
			<div className="block">
				<div className="grid-flex">
					<div className="column-12">
						<nav className="breadcrumb-navigation">
							<ul className="breadcrumb-items">{renderBreadcrumbs()}</ul>
						</nav>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
