import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/Head/SEO';
import Img from 'gatsby-image';
import AuthorDetails from '../components/AuthorDetails';

const Author: React.FC<AuthorProps> = ({ pageContext }) => {
	const { frontmatter } = pageContext;
	const { title, abstract } = frontmatter;
	console.log(frontmatter);

	return (
		<Layout>
			<SEO title={title} description={abstract} />
			<section className="Author">
				<div className="block">
					<div className="block-inner">
						<AuthorDetails author={frontmatter} variant="brief" />
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default Author;

interface AuthorProps {
	pageContext: {
		frontmatter: {
			abstract: string;
			title: string;
			twitter: string;
			image: {
				childImageSharp: {
					fluid: {};
				};
			};
		};
	};
}
