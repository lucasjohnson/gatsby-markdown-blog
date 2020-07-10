import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/Head/SEO';

const Page: React.FC<PageProps> = ({ pageContext }) => {
	const { title, html } = pageContext;

	return (
		<Layout>
			<SEO title={title} />
			<section className="Page">
				<div className="block">
					<h1 className="heading-1">{title}</h1>
					<div className="markdown" dangerouslySetInnerHTML={{ __html: html }}></div>
				</div>
			</section>
		</Layout>
	);
};

export default Page;

interface PageProps {
	pageContext: {
		title: string;
		html: string;
	};
}
