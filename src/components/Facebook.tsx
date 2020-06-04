import React from 'react';
import { Helmet } from 'react-helmet';

const defaultProps = {
	type: ``,
	title: ``,
	description: ``,
	url: ``,
	locale: ``,
	banner: ``,
	bannerAlt: ``,
	twitter: ``
};

type FacebookProps = {
	type: string;
	title: string;
	description: string;
	url: string;
	locale: string;
	banner: string;
	bannerAlt: string;
	twitter: string;
} & typeof defaultProps;

const Facebook = ({ type, title, description, url, locale, banner, bannerAlt, siteName }) => (
	<Helmet>
		<meta property="og:type" content={type} />
		<meta property="og:title" content={title} />
		<meta property="og:description" content={description} />
		<meta property="og:url" content={url} />
		<meta property="og:locale" content={locale} />
		<meta property="og:image" content={banner} />
		<meta property="og:image:alt" content={bannerAlt} />
		<meta property="og:site_name" content={siteName} />
	</Helmet>
);

export default Facebook;

Facebook.defaultProps = defaultProps;
