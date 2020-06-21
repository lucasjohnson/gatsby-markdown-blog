import React from 'react';
import { Link } from 'gatsby';
import slugify from '../helpers/utils';

interface NavigationProps {
	data: {}[];
	title: string;
	variant: 'block' | 'inline';
}

const Navigation: React.FC<NavigationProps> = ({ data, title, variant }) => {
	const renderItems: Function = (menuItems: { item: string; index: number }[]) =>
		menuItems.map((item: { item: string; subItems?: { item: string } }, index: number) => {
			const { item: title } = item;

			return (
				<React.Fragment>
					<li className="item" key={index}>
						<Link className="link" to={`/${slugify(title)}`} title={title}>
							{title}
						</Link>
					</li>
					{item.subItems !== undefined && renderItems(item.subItems)}
				</React.Fragment>
			);
		});

	return (
		<nav className={`navigation ${variant} ${title}`}>
			<ul className="navigation-items">{renderItems(data)}</ul>
		</nav>
	);
};

export default Navigation;
