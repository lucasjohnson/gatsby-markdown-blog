import React from 'react';
import Button from '../Button';
import Icon from '../Icon';
import Navigation from './Navigation';
import ThemeContext from '../../context/ThemeContext';
import { motion } from 'framer-motion';
import data from '../../../content/navigation/main-navigation.yml';

const MainNavigation: React.FC = () => {
	const { menuItems } = data;

	const variants = {
		open: { x: 0 },
		closed: { x: `100vw` }
	};

	return (
		<ThemeContext.Consumer>
			{({ hamburgerOpen, toggleContact, toggleHamburger, toggleSearch }) => (
				<React.Fragment>
					<motion.div
						initial="hidden"
						animate={hamburgerOpen ? `open` : `closed`}
						variants={variants}
						transition={{ duration: 0.35 }}
						className="hamburger-wrapper"
					>
						<Navigation data={menuItems} title="main" variant="inline" />
					</motion.div>
					<div className="buttons">
						<Button variant="icon" onClick={toggleSearch}>
							<Icon type="search" />
						</Button>
						<Button variant="primary" onClick={toggleContact}>
							Contact
						</Button>
						<Button variant="icon" onClick={toggleHamburger}>
							{hamburgerOpen ? <Icon type="cross" /> : <Icon type="hamburger" />}
						</Button>
					</div>
				</React.Fragment>
			)}
		</ThemeContext.Consumer>
	);
};

export default MainNavigation;
