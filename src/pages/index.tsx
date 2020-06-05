import React, { FunctionComponent } from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const IndexPage: FunctionComponent = () => (
	<Layout>
		<SEO title="Homepage" />
		<div className="block">
			<div className="grid">
				<h1 className="heading-1">Homepage</h1>
			</div>
		</div>
	</Layout>
);

export default IndexPage;
