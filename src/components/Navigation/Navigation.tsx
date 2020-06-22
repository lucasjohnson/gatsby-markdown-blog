import React from 'react';
import Anchor from '../Anchor';
import Icon from '../Icon';
import slugify from '../../helpers/utils';

interface NavigationProps {
	data: {}[];
	title: string;
	variant: 'block' | 'icon' | 'inline';
}

const Navigation: React.FC<NavigationProps> = ({ data, title, variant }) => {
	const renderItems: Function = (menuItems: { item: string; index: number }[]) =>
		menuItems.map((item: { item: string; url?: string; subItems?: { item: string } }, index: number) => {
			const { item: title, url } = item;

			return (
				<React.Fragment>
					<li className="item" key={index}>
						{variant === `icon` ? (
							<Anchor title={title} url={url} variant="link external">
								<Icon type={title} />
							</Anchor>
						) : (
							<Anchor title={title} url={`/${slugify(title)}`} variant="link">
								{title}
							</Anchor>
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
