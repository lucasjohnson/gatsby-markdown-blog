import React, { FunctionComponent } from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { GoLinkExternal } from 'react-icons/go';

interface ButtonLinkProps {
	title: string;
	url: string;
	variant: 'primary' | 'primary external' | 'secondary' | 'secondary external';
}

const ButtonLink: FunctionComponent<ButtonLinkProps> = ({ title, url, variant, children }) => {
	const isInternalUrl = /^\/(?!\/)/.test(url);

	if (isInternalUrl) {
		return (
			<GatsbyLink className={`button-link ${variant}`} to={url} title={title}>
				{children}
			</GatsbyLink>
		);
	}

	return (
		<a className={`button-link ${variant}`} href={url} title={title} target="_blank" rel="noopener noreferrer">
			{children}
			<GoLinkExternal className="icon" />
		</a>
	);
};

export default ButtonLink;
