import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/Head/SEO';

const IndexPage: React.FC = () => (
	<Layout>
		<SEO title="Homepage" />
		<section className="block">
			<div className="grid-flex">
				<div className="column-12">
					<h1 className="heading-1">Homepage</h1>
				</div>
			</div>
		</section>
	</Layout>
);

export default IndexPage;
