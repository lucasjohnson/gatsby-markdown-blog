import React, { FunctionComponent } from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Grid from '../blocks/elements/Grid';
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
			<Grid variant="grid-flex">
				<div className="column-12">
					<h1 className="heading-1">Layouts</h1>
					<h2 className="heading-2">Grid Cards</h2>
					<Grid variant="grid">
						{data.map((item, index) => {
							return <GridCard data={item} key={index} />;
						})}
					</Grid>
				</div>
			</Grid>
		</section>
	</Layout>
);

export default LayoutsPage;
