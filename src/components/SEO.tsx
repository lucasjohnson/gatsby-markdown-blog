import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const defaultProps = {
	title: ``,
	description: ``
};

type SEOProps = { title: string; description: string } & typeof defaultProps;

type SiteProps = {
	site: {
		siteMetadata: {
			siteName: string;
			siteUrl: string;
			siteDescription: string;
			siteAuthor: string;
			siteBanner: string;
			siteLanguage: string;
			siteLogo: string;
			facebook: string;
			twitter: string;
			ogLanguage: string;
		};
	};
};

const SEO = ({ title, description }: SEOProps) => {
	const { site } = useStaticQuery<SiteProps>(graphql`
		query {
			site {
				siteMetadata {
					siteName
					siteUrl
					siteDescription
					siteAuthor
					siteBanner
					siteLanguage
					siteLogo
					facebook
					twitter
					ogLanguage
				}
			}
		}
	`);

	const {
		siteName,
		siteUrl,
		siteDescription,
		siteAuthor,
		siteBanner,
		siteLanguage,
		siteLogo,
		facebook,
		twitter,
		ogLanguage
	} = site.siteMetadata;

	const metaDescription = description || siteDescription;

	return (
		<Helmet
			htmlAttributes={{
				lang: siteLanguage
			}}
			title={title}
			titleTemplate={`%s | ${siteName}`}
		/>
	);
};

export default SEO;

SEO.defaultProps = defaultProps;
