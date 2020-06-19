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

	return (
		<Layout>
			<SEO title={title} />
			<section className="Topics">
				<div className="block">
					<div className="grid-flex">
						<div className="column-12">
							<h1 className="heading-1">{title}</h1>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default Topics;
