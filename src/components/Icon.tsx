import React from 'react';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { GoChevronDown, GoChevronLeft, GoChevronRight, GoChevronUp, GoLinkExternal } from 'react-icons/go';

interface IconProps {
	type: string;
}

const Icon: React.FC<IconProps> = ({ type }) => {
	let icon;

	switch (type) {
		case `chevron-down`:
			icon = <GoChevronDown className="icon" />;
			break;
		case `chevron-left`:
			icon = <GoChevronLeft className="icon" />;
			break;

		case `chevron-right`:
			icon = <GoChevronRight className="icon" />;
			break;
		case `chevron-up`:
			icon = <GoChevronUp className="icon" />;
			break;
		case `external`:
			icon = <GoLinkExternal className="icon" />;
			break;
		case `facebook`:
			icon = <FaFacebookF className="icon" />;
			break;
		case `twitter`:
			icon = <FaTwitter className="icon" />;
			break;
		default:
			return null;
	}

	return icon;
};

export default Icon;
