import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import Twitter from './Twitter';
import Facebook from './Facebook';

interface PropsTypes {
	banner?: string;
	bannerAlt?: string;
	contentType?: 'NewsArticle';
	date?: string;
	description?: string;
	pathname?: string;
	title: string;
}

interface SiteQuery {
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
			businessStreet: string;
			businessLocality: string;
			businessRegion: string;
			businessPostalCode: string;
			businessCountry: string;
			businesstelephone: string;
		};
	};
}

const SEO = ({ banner, bannerAlt, contentType, date, description, pathname, title }: PropsTypes) => {
	const { site } = useStaticQuery<SiteQuery>(graphql`
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
		copyrightYear: `2020`,
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
		'@type': `ProfessionalService`,
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

	const itemListElement = [
		{
			'@type': `ListItem`,
			item: {
				'@id': siteUrl,
				name: `Homepage`
			},
			position: 1
		},
		{
			'@type': `ListItem`,
			item: {
				'@id': `${siteUrl}/blog`,
				name: `Blog`
			},
			position: 1
		}
	];

	let schemaArticle = null;

	if (contentType) {
		schemaArticle = {
			'@context': `http://schema.org`,
			'@type': contentType,
			author: {
				'@type': `Person`,
				name: siteAuthor
			},
			copyrightHolder: {
				'@type': `Person`,
				name: siteAuthor
			},
			copyrightYear: date && date.substr(date.length - 4),
			creator: {
				'@type': `Person`,
				name: siteAuthor
			},
			publisher: {
				'@type': `Organization`,
				name: siteAuthor,
				logo: {
					'@type': `ImageObject`,
					url: `${siteUrl}${siteLogo}`
				}
			},
			description: description,
			headline: title,
			inLanguage: siteLanguage,
			url: `${siteUrl}${pathname}`,
			name: title,
			image: {
				'@type': `ImageObject`,
				url: `${siteUrl}${banner}`
			},
			mainEntityOfPage: `${siteUrl}${pathname}`,
			datePublished: date
			// dateModified: buildTime
		};

		itemListElement.push({
			'@type': `ListItem`,
			item: {
				'@id': `${siteUrl}${pathname}`,
				name: title
			},
			position: 2
		});
	}

	const breadcrumb = {
		'@context': `http://schema.org`,
		'@type': `BreadcrumbList`,
		description: `Breadcrumbs list`,
		name: `Breadcrumbs`,
		itemListElement
	};

	const metaTitle: string = title ? title : siteName;
	const metaDescription: string = description ? description : siteDescription;
	const metaUrl: string = pathname ? `${siteUrl}${pathname}` : siteUrl;
	const metaBanner: string = banner ? `${siteUrl}${banner}` : `${siteUrl}${siteBanner}`;
	const metaBannerAlt: string = bannerAlt ? bannerAlt : siteDescription;
	const metaContentType: string = contentType ? contentType : `Website`;

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
				{!contentType && <script type="application/ld+json">{JSON.stringify(schemaWebPage)}</script>}
				{contentType && <script type="application/ld+json">{JSON.stringify(schemaArticle)}</script>}
				<script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
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
				locale={siteLanguage}
				banner={metaBanner}
				bannerAlt={metaBannerAlt}
				siteName={siteName}
			/>
		</React.Fragment>
	);
};

export default SEO;
