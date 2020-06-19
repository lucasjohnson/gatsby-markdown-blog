import React from 'react';
import { Link } from 'gatsby';
import Breadcrumbs from './Breadcrumbs';
import FooterNavigation from './FooterNavigation';
import CompanyInformation from './CompanyInformation';
import LegalNavigation from './LegalNavigation';

const Footer: React.FC = () => {
	return (
		<footer className="Footer">
			<div className="block">
				<div className="grid-flex">
					<div className="column-12">
						<Breadcrumbs />
						<div className="grid-flex">
							<div className="column-8">
								<FooterNavigation />
							</div>
							<div className="column-4">
								<CompanyInformation />
							</div>
							<div className="column-12">
								<LegalNavigation />
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
