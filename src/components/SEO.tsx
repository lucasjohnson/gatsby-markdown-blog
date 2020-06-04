import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import Twitter from './Twitter';
import Facebook from './Facebook';

const defaultProps = {
	title: ``,
	description: ``,
	banner: ``,
	bannerAlt: ``,
	contentType: ``
};

type SEOProps = {
	title: string;
	description: string;
	banner: string;
	bannerAlt: sting;
	contentType: sting;
} & typeof defaultProps;

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

const SEO = ({ title, description, banner, bannerAlt, contentType }: SEOProps) => {
	const { site } = useStaticQuery<SiteProps>(graphql`
		query {
			site {
				siteMetadata {
					siteName
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
		siteDescription,
		siteAuthor,
		siteBanner,
		siteLanguage,
		siteLogo,
		facebook,
		twitter,
		ogLanguage
	} = site.siteMetadata;

	const metaTitle = title || siteName;
	const metaDescription = description || siteDescription;
	const metaUrl = typeof window !== `undefined` && window.location.href;
	const metaBanner = banner || siteBanner;
	const metaBannerAlt = bannerAlt || siteDescription;
	const metaContentType = contentType || `Website`;

	return (
		<React.Fragment>
			<Helmet
				htmlAttributes={{
					lang: siteLanguage
				}}
				title={title}
				titleTemplate={`%s | ${siteName}`}
			/>
			<Twitter
				title={metaTitle}
				description={metaDescription}
				url={metaUrl}
				banner={metaBanner}
				bannerAlt={metaBannerAlt}
				twitter={twitter}
			/>
			<Facebook
				type={metaContentType}
				title={metaTitle}
				description={metaDescription}
				url={metaUrl}
				locale={ogLanguage}
				banner={metaBanner}
				bannerAlt={metaBannerAlt}
				siteName={siteName}
			/>
		</React.Fragment>
	);
};

export default SEO;

SEO.defaultProps = defaultProps;
