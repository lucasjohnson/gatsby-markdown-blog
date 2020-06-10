import React, { FunctionComponent } from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const ErrorPage: FunctionComponent = () => (
	<Layout>
		<SEO title="Error Page" />
		<section className="block">
			<div className="grid-flex">
				<div className="column-12">
					<h1>Error Page</h1>
				</div>
			</div>
		</section>
	</Layout>
);

export default ErrorPage;
