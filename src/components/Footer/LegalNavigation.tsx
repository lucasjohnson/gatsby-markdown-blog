import React from 'react';
import { Link } from 'gatsby';
import legalData from '../../../content/navigation/legal-navigation.yml';
import socialData from '../../../content/site/social.yml';
import sanitizeSlug from '../../helpers/utils';

const LegalNavigation: React.FC = () => {
	const { legalCopy, legalMenuItems } = legalData;
	const { socialMediaAccounts } = socialData;

	const renderLegalMenu: Function = () =>
		legalMenuItems.map((item: { item: string }[], index: number) => {
			const { item: title } = item;

			return (
				<li className="legal-item" key={index}>
					<Link className="legal-link" to={`/${sanitizeSlug(title)}`} title={`Link to page`}>
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
					<Link className="social-link" to={url} title={`Link to ${title} account opens in new tab`}>
						{title}
					</Link>
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
