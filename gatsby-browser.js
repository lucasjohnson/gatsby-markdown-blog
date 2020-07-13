import React from 'react';
import 'normalize.css';
import './src/styles/global.scss';

import { ThemeProvider } from './src/context/ThemeContext';

export const wrapRootElement = ({ element }) => {
	return <ThemeProvider>{element}</ThemeProvider>;
};
