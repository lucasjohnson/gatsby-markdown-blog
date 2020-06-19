import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/Head/SEO';

interface ServicesProps {
	pageContext: {
		title: string;
	};
}

const Services: React.FC<ServicesProps> = ({ pageContext }) => {
	const { title } = pageContext;
	const pageTitle: string = title ? title : `Services`;

	return (
		<Layout>
			<SEO title={pageTitle} />
			<section className="Services">
				<div className="block">
					<div className="grid-flex">
						<div className="column-12">
							<h1 className="heading-1">{pageTitle}</h1>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default Services;
