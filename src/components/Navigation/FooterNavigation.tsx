import React from 'react';
import GridBox from '../GridBox';
import Navigation from './Navigation';
import menuData from '../../../content/navigation/footer-navigation.yml';
import companyData from '../../../content/site/company.yml';

const FooterNavigation: React.FC = () => {
	const { menuColumns } = menuData;
	const { address, city, country, email, postalCode, province, telephone, title } = companyData;

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
			<div className="footer-column">
				<address>
					<ul className="address-items">
						<li className="li address-item">{title}</li>
						<li className="li address-item">{`${address}, ${city}`}</li>
						<li className="li address-item">{`${province}, ${postalCode}`}</li>
						<li className="li address-item">{country}</li>
						<li className="li address-item">
							<a href={`mailto:${email}`}>{email}</a>
						</li>
						<li className="li address-item">
							<a href={`tel:${telephone}`}>{telephone}</a>
						</li>
					</ul>
				</address>
			</div>
		</GridBox>
	);
};

export default FooterNavigation;
