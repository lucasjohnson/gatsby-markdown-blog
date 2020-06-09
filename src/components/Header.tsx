import React, { ReactElement } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Header = (): ReactElement => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					siteName
				}
			}
		}
	`);

	const { siteName } = data.site.siteMetadata;

	return (
		<header>
			<div className="block">
				<div className="grid">
					<div className="column-12">
						<h4 className="heading-4">{siteName}</h4>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
