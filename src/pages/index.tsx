import React, { Component } from 'react';
import { graphql, PageProps } from 'gatsby';
import Layout from '../components/layout';

interface IndexProps extends PageProps {
	data: {
		site: {
			siteMetadata: {
				siteName: string;
			};
		};
	};
}

export const pageQuery = graphql`
	query IndexQuery {
		site {
			siteMetadata {
				siteName
			}
		}
	}
`;

export default function IndexPage(props: IndexProps) {
	const { siteName } = props.data.site.siteMetadata;

	return (
		<Layout>
			<h1>{siteName}</h1>
		</Layout>
	);
}
