import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/Head/SEO';

interface AuthorProps {
	pageContext: {
		abstract: string;
		html: string;
		image: object;
		title: string;
		twitter: string;
	};
}

const Author: React.FC<AuthorProps> = ({ pageContext }) => {
	const { abstract, html, image, title, twiiter } = pageContext;

	console.log(pageContext);

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

export default Author;
