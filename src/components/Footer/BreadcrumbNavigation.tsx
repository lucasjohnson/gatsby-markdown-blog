import React from 'react';
import { Link } from 'gatsby';

const BreadcrumbNavigation: React.FC = () => {
	const pathname: string = typeof window !== `undefined` ? window.location.pathname : ``;
	const pathCrumbs: string[] = pathname.split(`/`);

	pathname.length === 1 && pathCrumbs.pop();

	const renderBreadcrumbs: Function = () =>
		pathCrumbs.map((crumb: string, index: number) => {
			const crumbTitle: string = crumb.length === 0 ? `Home` : crumb;

			return (
				<li className="breadcrumb-item" key={index}>
					{index !== pathCrumbs.length - 1 ? (
						<Link className="breadcrumb-link" to={`/${crumb && crumb}`} title={`Link to ${crumbTitle} page`}>
							{crumbTitle}
						</Link>
					) : (
						crumbTitle
					)}
				</li>
			);
		});

	return (
		<nav className="breadcrumb-navigation">
			<ul className="breadcrumb-items">{renderBreadcrumbs()}</ul>
		</nav>
	);
};

export default BreadcrumbNavigation;
