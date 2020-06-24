import React from 'react';
import Anchor from '../Anchor';
import Icon from '../Icon';

const BreadcrumbNavigation: React.FC = () => {
	const pathname: string = typeof window !== `undefined` ? window.location.pathname : ``;
	let pathCrumbs: string[] = pathname.split(`/`);

	pathCrumbs = pathCrumbs.filter(function (string) {
		return string != ``;
	});

	pathCrumbs.unshift(``);

	const renderBreadcrumbs: Function = () =>
		pathCrumbs.map((crumb: string, index: number) => {
			const crumbTitle: string = crumb.length === 0 ? `Homepage` : crumb;

			return (
				<li className="item" key={index}>
					{index !== pathCrumbs.length - 1 ? (
						<React.Fragment>
							<Anchor title={crumbTitle} url={`/${crumb && crumb}`} variant="link">
								{crumbTitle}
							</Anchor>
							<Icon type="ChevronRight" />
						</React.Fragment>
					) : (
						<span className="current-page">{crumbTitle}</span>
					)}
				</li>
			);
		});

	return (
		<nav className="navigation inline breadcrumb">
			<ul className="items">{renderBreadcrumbs()}</ul>
		</nav>
	);
};

export default BreadcrumbNavigation;
