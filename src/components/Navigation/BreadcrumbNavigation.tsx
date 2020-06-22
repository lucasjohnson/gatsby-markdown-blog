import React from 'react';
import Anchor from '../Anchor';

const BreadcrumbNavigation: React.FC = () => {
	const pathname: string = typeof window !== `undefined` ? window.location.pathname : ``;
	let pathCrumbs: string[] = pathname.split(`/`);

	pathCrumbs = pathCrumbs.filter(function (string) {
		return string != ``;
	});

	pathCrumbs.unshift(``);

	const renderBreadcrumbs: Function = () =>
		pathCrumbs.map((crumb: string, index: number) => {
			const crumbTitle: string = crumb.length === 0 ? `Home` : crumb;

			return (
				<li className="item" key={index}>
					{index !== pathCrumbs.length - 1 ? (
						<Anchor title={crumbTitle} url={`/${crumb && crumb}`} variant="link">
							{crumbTitle}
						</Anchor>
					) : (
						crumbTitle
					)}
				</li>
			);
		});

	return (
		<nav className="navigation inline">
			<ul className="items">{renderBreadcrumbs()}</ul>
		</nav>
	);
};

export default BreadcrumbNavigation;
