import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/Head/SEO';

interface Props {
	pageContext: {
		title: string;
	};
}

const Service: React.FC<Props> = ({ pageContext }) => {
	const { title } = pageContext;
	const pageTitle = title ? title : `Services`;

	return (
		<Layout>
			<SEO title={pageTitle} />
			<section className="Topic">
				<div className="block">
					<div className="grid-flex">
						<div className="column-12">
							<h1 className="heading-1">{pageTitle}</h1>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default Service;
