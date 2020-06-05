import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import Twitter from './Twitter';
import Facebook from './Facebook';

type SEOProps = {
	title: string;
	description?: string;
	banner?: string;
	bannerAlt?: string;
	contentType?: string;
};

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
					siteUrl
					siteDescription
					siteAuthor
					siteBanner
					siteLanguage
					siteLogo
					twitter
					ogLanguage
					businessStreet
					businessLocality
					businessRegion
					businessPostalCode
					businessCountry
					businesstelephone
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
		twitter,
		ogLanguage,
		businessStreet,
		businessLocality,
		businessRegion,
		businessPostalCode,
		businessCountry,
		businesstelephone
	} = site.siteMetadata;

	const schemaWebPage = {
		'@context': `http://schema.org`,
		'@type': `WebPage`,
		url: siteUrl,
		description: siteDescription,
		inLanguage: siteLanguage,
		mainEntityOfPage: siteUrl,
		name: siteName,
		author: {
			'@type': `Person`,
			name: siteAuthor
		},
		copyrightHolder: {
			'@type': `Person`,
			name: siteAuthor
		},
		copyrightYear: `2019`,
		creator: {
			'@type': `Person`,
			name: siteAuthor
		},
		publisher: {
			'@type': `Person`,
			name: siteAuthor
		},
		datePublished: ``,
		dateModified: ``,
		image: {
			'@type': `ImageObject`,
			url: siteLogo
		}
	};

	const schemaBusiness = {
		'@context': `https://schema.org`,
		'@type': `Organization`,
		'@id': siteUrl,
		name: siteName,
		address: {
			'@type': `PostalAddress`,
			streetAddress: businessStreet,
			addressLocality: businessLocality,
			addressRegion: businessRegion,
			postalCode: businessPostalCode,
			addressCountry: businessCountry
		},
		url: siteUrl,
		telephone: businesstelephone
	};

	const metaTitle = title || siteName;
	const metaDescription = description || siteDescription;
	// UPDATE URL WITH PAGE AND POST PROPS
	const metaUrl = `${siteUrl}`;
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
			>
				<meta name="description" content={metaDescription} />
				<meta name="image" content={metaBanner} />
				<script type="application/ld+json">{JSON.stringify(schemaBusiness)}</script>
				<script type="application/ld+json">{JSON.stringify(schemaWebPage)}</script>
			</Helmet>
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