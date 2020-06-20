import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

type AnchorProps = {
	className?: string;
	title: string;
	url: string;
	variant: 'external' | 'internal';
};

const Anchor: React.FC<AnchorProps> = ({ className, title, url, variant, children }) => {
	if (variant === `internal`) {
		return (
			<GatsbyLink className={`link ${className}`} to={url} title={title}>
				{children}
			</GatsbyLink>
		);
	}

	return (
		<a
			className={`link ${className}`}
			href={url}
			title={`${title} opens in new tab`}
			target="_blank"
			rel="noopener noreferrer"
		>
			{children}
		</a>
	);
};

export default Anchor;
