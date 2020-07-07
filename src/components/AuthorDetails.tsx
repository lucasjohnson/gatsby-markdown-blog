import React from 'react';
import Img from 'gatsby-image';
import Anchor from './Anchor';
import Icon from './Icon';

interface AuthorProps {
	author: {
		title: string;
		twitter: string;
		image: {
			childImageSharp: {
				fluid: {};
			};
		};
	};
	date: string;
	title: string;
	variant: 'brief' | 'full';
}

const AuthorDetails: React.FC<AuthorProps> = ({ author, date, title, variant }) => {
	const { title: name, twitter, image } = author;
	const { fluid } = image.childImageSharp;

	return (
		<div className={`author-profile ${variant}`}>
			{image && <Img className="author-image" fluid={fluid} alt={title} />}
			<div className="author-details">
				<span className="author-name">{name}</span>
				{twitter && (
					<Anchor
						className="author-twitter"
						url={`https://twitter.com/${twitter}`}
						title={`${author} Twitter account`}
						variant="link external"
					>
						<Icon type="Twitter" />
						{twitter}
					</Anchor>
				)}
				<span className="post-date">{date}</span>
			</div>
		</div>
	);
};

export default AuthorDetails;
