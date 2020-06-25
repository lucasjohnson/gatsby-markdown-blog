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
			<section className="Services">
				<div className="block">
					<div className="block-inner">
						<h1 className="heading-1">{title}</h1>
						<div className="markdown" dangerouslySetInnerHTML={{ __html: html }}></div>
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default Service;
