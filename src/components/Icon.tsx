import React from 'react';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { GoChevronDown, GoLinkExternal } from 'react-icons/go';

interface IconProps {
	type: string;
}

const Icon: React.FC<IconProps> = ({ type }) => {
	let icon;

	switch (type) {
		case `Facebook`:
			icon = <FaFacebookF className="icon" />;
			break;
		case `Twitter`:
			icon = <FaTwitter className="icon" />;
			break;
		case `external`:
			icon = <GoLinkExternal className="icon" />;
			break;
		case `ChevronDown`:
			icon = <GoChevronDown className="icon" />;
			break;
		default:
			return null;
	}

	return icon;
};

export default Icon;
