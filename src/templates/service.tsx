import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/Head/SEO';

const Service: React.FC<ServiceProps> = ({ pageContext }) => {
	const { abstract, html, title, posts } = pageContext;

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

interface ServiceProps {
	pageContext: {
		abstract: string;
		html: string;
		title: string;
		posts: [];
	};
}
