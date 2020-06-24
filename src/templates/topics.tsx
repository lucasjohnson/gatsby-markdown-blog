import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/Head/SEO';

interface TopicsProps {
	pageContext: {
		title: string;
	};
}

const Topics: React.FC<TopicsProps> = ({ pageContext }) => {
	const { title } = pageContext;
	const pageTitle: string = title ? title : `Topics`;

	return (
		<Layout>
			<SEO title={pageTitle} />
			<section className="Topics block">
				<h1 className="heading-1">{pageTitle}</h1>
			</section>
		</Layout>
	);
};

export default Topics;
