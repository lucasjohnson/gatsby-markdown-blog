import React, { ReactElement } from 'react';
import Layout from '../components/Layout';
import SEO from '../components/Head/SEO';

const Topic = ({ pageContext }): ReactElement => {
	const { topic } = pageContext;
	return (
		<Layout>
			<SEO title={topic} />
			<section className="Topic">
				<div className="block">
					<div className="grid-flex">
						<div className="column-12">
							<h1 className="heading-1">{topic}</h1>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default Topic;
