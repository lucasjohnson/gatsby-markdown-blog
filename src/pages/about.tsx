import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/Head/SEO';

const AboutPage: React.FC = () => (
	<Layout>
		<SEO title="About Page" />
		<section className="block">
			<div className="grid-flex">
				<div className="column-12">
					<h1 className="heading-1">About</h1>
				</div>
			</div>
		</section>
	</Layout>
);

export default AboutPage;
