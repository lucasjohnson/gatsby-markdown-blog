import React from 'react';
import { Link } from 'gatsby';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import legalData from '../../../content/navigation/legal-navigation.yml';
import socialData from '../../../content/site/social.yml';
import slugify from '../../helpers/utils';

const LegalNavigation: React.FC = () => {
	const { legalCopy, legalMenuItems } = legalData;
	const { socialMediaAccounts } = socialData;

	const renderLegalMenu: Function = () =>
		legalMenuItems.map((item: { item: string }[], index: number) => {
			const { item: title } = item;

			return (
				<li className="legal-item" key={index}>
					<Link className="legal-link" to={`/${slugify(title)}`} title={`Link to page`}>
						{title}
					</Link>
				</li>
			);
		});

	const renderSocialMedia: Function = () =>
		socialMediaAccounts.map((item: { type: string; url: string }, index: number) => {
			const { type: title, url } = item;

			return (
				<li className="social-item" key={index}>
					<a
						className="social-link"
						href={url}
						title={`Link to ${title} account opens in new tab`}
						target="_blank"
						rel="noopener noreferrer"
					>
						{title === `Facebook` ? <FaFacebookF className="icon" /> : <FaTwitter className="icon" />}
					</a>
				</li>
			);
		});

	return (
		<div className="grid-flex">
			<div className="column-4">{legalCopy}</div>
			<div className="column-4">
				<nav className="legal-navigation">
					<ul className="legal-items">{renderLegalMenu()}</ul>
				</nav>
			</div>
			<div className="column-4">
				<nav className="social-navigation">
					<ul className="social-items">{renderSocialMedia()}</ul>
				</nav>
			</div>
		</div>
	);
};

export default LegalNavigation;
