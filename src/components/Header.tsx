import React, { ReactElement } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

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
			<h1>{siteName}</h1>
		</header>
	);
};

export default Header;
