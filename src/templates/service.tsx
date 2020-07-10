import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/Head/SEO';
import PostList from '../components/PostList';
import TagList from '../components/TagList';

const Service: React.FC<ServiceProps> = ({ pageContext }) => {
	const { abstract, allServices, html, title, relatedPosts } = pageContext;

	return (
		<Layout>
			<SEO title={title} description={abstract} />
			<section className="Services">
				<div className="block">
					<h1 className="heading-1">{title}</h1>
					<div className="markdown" dangerouslySetInnerHTML={{ __html: html }}></div>
          <TagList copy="Other services offered:" items={allServices} variant="link" />
					<h2 className="heading-2">{`Posts related to "${title}"`}</h2>
					<PostList posts={relatedPosts} />
				</div>
			</section>
		</Layout>
	);
};

export default Service;

interface ServiceProps {
	pageContext: {
		abstract: string;
    allServices: [];
		html: string;
		title: string;
		relatedPosts: [];
	};
}
