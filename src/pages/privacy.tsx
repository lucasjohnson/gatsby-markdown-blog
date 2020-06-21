import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/Head/SEO';

const PrivacyPage: React.FC = () => (
	<Layout>
		<SEO title="Privacy Page" />
		<section className="block">
			<div className="grid-flex">
				<div className="column-12">
					<h1 className="heading-1">Privacy</h1>
				</div>
			</div>
		</section>
	</Layout>
);

export default PrivacyPage;
