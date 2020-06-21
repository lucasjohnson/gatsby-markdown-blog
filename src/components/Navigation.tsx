import React from 'react';
import { Link } from 'gatsby';
import slugify from '../helpers/utils';

interface NavigationProps {
	data: {
		item: string;
		index: number;
		subItems?: {
			item: string;
			index: number;
		}[];
	}[];
	title: string;
	variant: 'block' | 'inline';
}

const Navigation: React.FC<NavigationProps> = ({ data, title, variant }) => {
	const renderItems: Function = () =>
		data.map((item, index) => {
			const { item: title } = item;

			return (
				<li className="item" key={index}>
					<Link className="link" to={`/${slugify(title)}`} title={title}>
						{title}
					</Link>
				</li>
			);
		});

	return (
		<nav className={`navigation ${variant} ${title}`}>
			<ul className="navigation-items">{renderItems()}</ul>
		</nav>
	);
};

export default Navigation;
