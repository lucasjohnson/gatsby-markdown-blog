import React from 'react';
import Img from 'gatsby-image';
import Anchor from './Anchor';
import Icon from './Icon';
import slugify from '../helpers/slugify';

const AuthorDetails: React.FC<AuthorProps> = ({ author, date, title, variant }) => {
	const { html, title: name, twitter, image } = author;
	const { fluid } = image.childImageSharp;

	return (
    <React.Fragment>
      <div className={`author-details${variant ? ` ${variant}` : ``}`}>
  			{image && <Img className="author-image" fluid={fluid} alt={title} />}
  			<div className="author-links">
  				{ variant !== 'page' &&
            <Anchor className="author-name" url={`/${slugify(name)}`} title={name} variant="link">
              {name}
            </Anchor>
          }
  				{twitter && (
  					<Anchor
  						className="author-twitter"
  						url={`https://twitter.com/${twitter}`}
  						title={`${author} Twitter account`}
  						variant="link external"
  					>
  						<Icon type="twitter" />
  						{twitter}
  					</Anchor>
  				)}
  				{ variant === 'brief'
            && <span className="post-date">{date}</span>
          }
  			</div>
  		</div>
      { variant === 'full' || variant === 'page' &&
        <div className="author-biography markdown" dangerouslySetInnerHTML={{ __html: html }}></div>
      }
    </React.Fragment>
	);
};

export default AuthorDetails;

interface AuthorProps {
	author: {
    html: string;
		title: string;
		twitter: string;
		image: {
			childImageSharp: {
				fluid: {};
			};
		};
	};
	date?: string;
	title?: string;
	variant: 'brief' | 'full' | 'page';
}
