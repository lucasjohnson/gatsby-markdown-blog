import React from 'react';
import GridBox from '../GridBox';
import Navigation from './Navigation';
import Anchor from '../Anchor';
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
					<span className="title">{title}</span>
					<Navigation data={menuItems} title="footer" variant="block" />
				</div>
			);
		});

	return (
		<GridBox variant="grid-box" column={1} columnMd={3}>
			{renderMenuColumns()}
			<div className="footer-column">
				<address>
					<ul className="items">
						<li className="item body-copy">{title}</li>
						<li className="item body-copy">{`${address}, ${city}`}</li>
						<li className="item body-copy">{`${province}, ${postalCode}`}</li>
						<li className="item body-copy">{country}</li>
						<li className="item body-copy">
							<Anchor url={`mailto:${email}`} title={email} variant="link">
								{email}
							</Anchor>
						</li>
						<li className="item body-copy">
							<Anchor url={`tel:${telephone}`} title={telephone} variant="link">
								{telephone}
							</Anchor>
						</li>
					</ul>
				</address>
			</div>
		</GridBox>
	);
};

export default FooterNavigation;
