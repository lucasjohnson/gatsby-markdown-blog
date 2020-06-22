import React from 'react';
import BreadcrumbNavigation from '../Navigation/BreadcrumbNavigation';
import FooterNavigation from '../Navigation/FooterNavigation';
import LegalNavigation from '../Navigation/LegalNavigation';

const Footer: React.FC = () => {
	return (
		<footer className="Footer">
			<div className="block">
				<div className="grid-flex">
					<div className="column-12">
						<BreadcrumbNavigation />
						<FooterNavigation />
						<LegalNavigation />
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
