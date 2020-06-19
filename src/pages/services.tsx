import React, { ReactElement } from 'react';
import Layout from '../components/Layout';
import SEO from '../components/Head/SEO';

const Service = ({ pageContext }): ReactElement => {
	const { title } = pageContext;

	return (
		<Layout>
			<SEO title={title} />
			<section className="Topic">
				<div className="block">
					<div className="grid-flex">
						<div className="column-12">
							<h1 className="heading-1">{title}</h1>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default Service;
