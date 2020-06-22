import React from 'react';
import GridBox from '../GridBox';
import Navigation from './Navigation';
import legalData from '../../../content/navigation/legal-navigation.yml';
import socialData from '../../../content/site/social.yml';

const LegalNavigation: React.FC = () => {
	const { legalCopy, menuItems: legalItems } = legalData;
	const { menuItems: socialItems } = socialData;

	return (
		<GridBox variant="grid-box" column={1} columnMd={2} columnLg={3}>
			<p className="body-copy">{legalCopy}</p>
			<Navigation data={legalItems} title="legal" variant="inline" />
			<Navigation data={socialItems} title="social" variant="icon" />
		</GridBox>
	);
};

export default LegalNavigation;
