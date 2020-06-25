import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/Head/SEO';

interface ServicesProps {
	pageContext: {
		abstract: string;
		html: string;
		title: string;
	};
}

const Service: React.FC<ServicesProps> = ({ pageContext }) => {
	const { abstract, html, title } = pageContext;

	return (
		<Layout>
			<SEO title={title} description={abstract} />
			<section className="Services block">
				<h1 className="heading-1">{title}</h1>
				<div className="body-copy" dangerouslySetInnerHTML={{ __html: html }}></div>
			</section>
		</Layout>
	);
};

export default Service;
