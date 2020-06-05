import React from 'react';
import { Helmet } from 'react-helmet';

type TwitterProps = {
	title: string;
	description: string;
	url: string;
	banner: string;
	bannerAlt: string;
	twitter: string;
};

const Twitter = ({ title, description, url, banner, bannerAlt, twitter }: TwitterProps) => (
	<Helmet>
		<meta name="twitter:card" content="summary" />
		<meta name="twitter:title" content={title} />
		<meta name="twitter:description" content={description} />
		<meta name="twitter:url" content={url} />
		<meta name="twitter:image" content={banner} />
		<meta name="twitter:image:alt" content={bannerAlt} />
		<meta name="twitter:site" content={twitter} />
		<meta name="twitter:creator" content={twitter} />
	</Helmet>
);

export default Twitter;
