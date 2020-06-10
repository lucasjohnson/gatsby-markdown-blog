import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import GridBox from '../blocks/elements/GridBox';
import GridContent from '../blocks/elements/GridContent';

const dataContent2 = [
	{
		title: `Excepteur sint Occaecat`,
		copy: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. `
	},
	{
		title: `Excepteur sint Occaecat`,
		copy: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. `
	}
];
const dataContent3 = [
	{
		title: `Excepteur sint Occaecat`,
		copy: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. `
	},
	{
		title: `Excepteur sint Occaecat`,
		copy: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. `
	},
	{
		title: `Excepteur sint Occaecat`,
		copy: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. `
	}
];

const LayoutsPage: FunctionComponent = () => (
	<Layout>
		<SEO title="Layouts" />
		<section className="block">
			<div className="grid-flex">
				<div className="column-12">
					<h1 className="heading-1">Layouts</h1>
					<h2 className="heading-2">Two Column Copy</h2>
					<GridBox variant="grid-box" column={1} columnMd={2}>
						{dataContent2.map((item, index) => {
							return <GridContent data={item} key={index} />;
						})}
					</GridBox>
					<h2 className="heading-2">Three Column Copy</h2>
					<GridBox variant="grid-box" column={1} columnMd={3}>
						{dataContent3.map((item, index) => {
							return <GridContent data={item} key={index} />;
						})}
					</GridBox>
				</div>
			</div>
		</section>
	</Layout>
);

export default LayoutsPage;
