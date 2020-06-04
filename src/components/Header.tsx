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
					<h1 className="heading-1">{siteName}</h1>
				</div>
			</div>
		</header>
	);
};

export default Header;
