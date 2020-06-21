import React from 'react';
import GridBox from '../GridBox';
import Navigation from './Navigation';
import data from '../../../content/navigation/footer-navigation.yml';

const FooterNavigation: React.FC = () => {
	const { menuColumns } = data;

	const renderMenuColumns: Function = () =>
		menuColumns.map((item: { title: string; menuItems: {}[] }, index: number) => {
			const { title, menuItems } = item;
			return (
				<div className="footer-column" key={index}>
					<h3 className="heading-4">{title}</h3>
					<Navigation data={menuItems} title="footer" variant="block" />
				</div>
			);
		});

	return (
		<GridBox variant="grid-box" column={1} columnMd={2} columnLg={3}>
			{renderMenuColumns()}
		</GridBox>
	);
};

export default FooterNavigation;
