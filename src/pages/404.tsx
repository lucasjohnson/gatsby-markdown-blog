import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/Head/SEO';

const ErrorPage: React.FC = () => (
	<Layout>
		<SEO title="Error Page" />
		<section className="block">
			<div className="grid-flex">
				<div className="column-12">
					<h1 className="heading-1">Error Page</h1>
				</div>
			</div>
		</section>
	</Layout>
);

export default ErrorPage;
