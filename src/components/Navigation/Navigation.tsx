import React from 'react';
import { Link } from 'gatsby';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import slugify from '../../helpers/utils';

interface NavigationProps {
	data: {}[];
	title: string;
	variant: 'block' | 'breadcrumbs' | 'icon' | 'inline';
}

const Navigation: React.FC<NavigationProps> = ({ data, title, variant }) => {
	const renderIcon: Function = (type: string) => {
		let icon;

		switch (type) {
			case `Facebook`:
				icon = <FaFacebookF className="icon" />;
				break;
			case `Twitter`:
				icon = <FaTwitter className="icon" />;
				break;
			default:
				return null;
		}

		return icon;
	};

	const renderItems: Function = (menuItems: { item: string; index: number }[]) =>
		menuItems.map((item: { item: string; url?: string; subItems?: { item: string } }, index: number) => {
			const { item: title, url } = item;

			return (
				<React.Fragment>
					<li className="item" key={index}>
						{variant === `icon` ? (
							<a
								className="social-link"
								href={url}
								title={`Link to ${title} account opens in new tab`}
								target="_blank"
								rel="noopener noreferrer"
							>
								{renderIcon(title)}
							</a>
						) : (
							<Link className="link" to={`/${slugify(title)}`} title={title}>
								{title}
							</Link>
						)}
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
