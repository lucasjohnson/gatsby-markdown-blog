import React from 'react';
import Img from 'gatsby-image';
import Anchor from './Anchor';
import Icon from './Icon';

interface AuthorProps {
	data: {
		postAuthor: {
			title: string;
			twitter: string;
			image: {
				childImageSharp: {
					fluid: {};
				};
			};
		};
		postDate: string;
	};
	postTitle: string;
	variant: 'brief' | 'full';
}

const AuthorDetails: React.FC<AuthorProps> = ({ data, postTitle, variant }) => {
	const { title: author, twitter, image } = data.postAuthor;
	const { fluid: profileFluid } = image.childImageSharp;
	const { postDate } = data;

	return (
		<div className={`author-profile ${variant}`}>
			{image && <Img className="author-image" fluid={profileFluid} alt={postTitle} />}
			<div className="author-details">
				<span className="author-name">{author}</span>
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
				<span className="post-date">{postDate}</span>
			</div>
		</div>
	);
};

export default AuthorDetails;
