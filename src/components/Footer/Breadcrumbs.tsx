import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';

const Breadcrumbs: FunctionComponent = () => {
	const pathname: string = typeof window !== `undefined` ? window.location.pathname : ``;
	const pathCrumbs: string[] = pathname.split(`/`);

	pathname.length === 1 && pathCrumbs.pop();

	const renderBreadcrumbs: Function = () =>
		pathCrumbs.map((crumb: string, index: number) => {
			const crumbInner = crumb.length === 0 ? `Home` : crumb;

			return (
				<li className="breadcrumb-item" key={index}>
					{index !== pathCrumbs.length - 1 ? (
						<Link
							className="breadcrumb-link"
							to={`/${crumb && crumb}`}
							title={`Link to ${crumb.length === 0 ? `Home` : crumb} page`}
						>
							{crumbInner}
						</Link>
					) : (
						crumbInner
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

export default Breadcrumbs;
