import React, { FunctionComponent } from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import GridBox from '../blocks/elements/Grid';
import GridCard from '../blocks/elements/GridCard';

const data = [
	{
		title: `Excepteur sint Occaecat`,
		copy: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,`,
		tag: `consectetur`
	},
	{
		title: `Excepteur sint Occaecat`,
		copy: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,`,
		tag: `consectetur`
	},
	{
		title: `Excepteur sint Occaecat`,
		copy: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,`,
		tag: `consectetur`
	},
	{
		title: `Excepteur sint Occaecat`,
		copy: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,`,
		tag: `consectetur`
	},
	{
		title: `Excepteur sint Occaecat`,
		copy: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,`,
		tag: `consectetur`
	},
	{
		title: `Excepteur sint Occaecat`,
		copy: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,`,
		tag: `consectetur`
	},
	{
		title: `Excepteur sint Occaecat`,
		copy: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,`,
		tag: `consectetur`
	}
];

const LayoutsPage: FunctionComponent = () => (
	<Layout>
		<SEO title="Layouts" />
		<section className="block">
			<div className="grid-flex">
				<div className="column-12">
					<h1 className="heading-1">Layouts</h1>
					<h2 className="heading-2">Grid Cards</h2>
					<GridBox variant="grid-box" column={1} columnMd={2} columnLg={4}>
						{data.map((item, index) => {
							return <GridCard data={item} key={index} />;
						})}
					</Grid>
				</div>
			</div>
		</section>
	</Layout>
);

export default LayoutsPage;
