import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/Head/SEO';

interface PageProps {
	pageContext: {
		title: string;
		html: string;
	};
}

const Topics: React.FC<PageProps> = ({ pageContext }) => {
	const { title, html } = pageContext;

	return (
		<Layout>
			<SEO title={title} />
			<section className="Page block">
				<h1 className="heading-1">{title}</h1>
				<div className="body-copy" dangerouslySetInnerHTML={{ __html: html }}></div>
			</section>
		</Layout>
	);
};

export default Topics;
