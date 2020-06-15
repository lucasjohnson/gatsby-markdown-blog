import React, { ReactElement } from 'react';
import siteData from '../../content/site/data.yml';

const Header = (): ReactElement => {
	const { siteTitle } = siteData;

	return (
		<header>
			<div className="block">
				<div className="grid-flex">
					<div className="column-12">
						<h4 className="heading-4">{siteTitle}</h4>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
