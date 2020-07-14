import React from 'react';
import {
	GoChevronDown,
	GoChevronLeft,
	GoChevronRight,
	GoChevronUp,
	GoX,
	GoLinkExternal,
	GoSearch
} from 'react-icons/go';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';

interface IconProps {
	type:
		| 'chevron-down'
		| 'chevron-left'
		| 'chevron-right'
		| 'chevron-up'
		| 'cross'
		| 'external'
		| 'search'
		| 'facebook'
		| 'twitter';
}

const Icon: React.FC<IconProps> = ({ type }) => {
	let icon;

	switch (type) {
		case `chevron-down`:
			icon = <GoChevronDown className="svg" />;
			break;
		case `chevron-left`:
			icon = <GoChevronLeft className="svg" />;
			break;
		case `chevron-right`:
			icon = <GoChevronRight className="svg" />;
			break;
		case `chevron-up`:
			icon = <GoChevronUp className="svg" />;
			break;
		case `cross`:
			icon = <GoX className="svg" />;
			break;
		case `external`:
			icon = <GoLinkExternal className="svg" />;
			break;
		case `search`:
			icon = <GoSearch className="svg" />;
			break;
		case `facebook`:
			icon = <FaFacebookF className="svg" />;
			break;
		case `twitter`:
			icon = <FaTwitter className="svg" />;
			break;
		default:
			return null;
	}

	return icon;
};

export default Icon;
