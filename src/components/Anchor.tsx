import React from 'react';
import Icon from './Icon';
import { Link } from 'gatsby';

const Anchor: React.FC<AnchorProps> = ({ className, onClick, title, url, variant, children }) => {
	let anchor;

	switch (variant) {
		case `link`:
		case `button primary`:
		case `button secondary`:
			anchor = (
				<Link className={`${variant}${className ? ` ${className}` : ``}`} to={url} title={title} onClick={onClick}>
					{children}
				</Link>
			);
			break;
		case `link external`:
		case `button external primary`:
		case `button external secondary`:
			anchor = (
				<a
					className={`${variant}${className && ` ${className}`}`}
					href={url}
					title={`${title} opens in new tab`}
					target="_blank"
					rel="noopener noreferrer"
				>
					{children}
					{variant !== `link external` && <Icon type="external" />}
				</a>
			);
			break;
		default:
			return null;
	}

	return anchor;
};

export default Anchor;

interface AnchorProps {
	className?: string;
	onClick?: () => void;
	title: string;
	url: string;
	variant:
		| 'link'
		| 'button primary'
		| 'button secondary'
		| 'link external'
		| 'button external primary'
		| 'button external secondary';
}
