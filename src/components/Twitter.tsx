import React from 'react';
import { Helmet } from 'react-helmet';
import socialData from '../../content/site/social.yml';

console.log(socialData);

type TwitterProps = {
	title: string;
	description: string;
	url: string;
	banner: string;
	bannerAlt: string;
};

const Twitter = ({ title, description, url, banner, bannerAlt }: TwitterProps) => (
	<Helmet>
		<meta name="twitter:card" content="summary" />
		<meta name="twitter:title" content={title} />
		<meta name="twitter:description" content={description} />
		<meta name="twitter:url" content={url} />
		<meta name="twitter:image" content={banner} />
		<meta name="twitter:image:alt" content={bannerAlt} />
		<meta name="twitter:site" content={socialData.twitterHandle} />
		<meta name="twitter:creator" content={socialData.twitterHandle} />
	</Helmet>
);

export default Twitter;
