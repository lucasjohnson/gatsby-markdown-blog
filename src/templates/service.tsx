import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/Head/SEO';

interface ServicesProps {
	pageContext: {
		title: string;
	};
}

const Service: React.FC<ServicesProps> = ({ pageContext }) => {
	const { title } = pageContext;
	const pageTitle: string = title ? title : `Services`;

	return (
		<Layout>
			<SEO title={pageTitle} />
			<section className="Services block">
				<h1 className="heading-1">{pageTitle}</h1>
			</section>
		</Layout>
	);
};

export default Service;
