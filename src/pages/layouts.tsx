import React, { FunctionComponent } from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const LayoutsPage: FunctionComponent = () => (
	<Layout>
		<SEO title="Layouts" />
		<section className="block">
			<div className="grid">
				<div className="column-12">
					<h1 className="heading-1">Layouts</h1>
				</div>
			</div>
		</section>
	</Layout>
);

export default LayoutsPage;
