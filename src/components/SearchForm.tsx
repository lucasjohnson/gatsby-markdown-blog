import React from 'react';
import ThemeContext from '../context/ThemeContext';
import Button from './Button';
import Icon from './Icon';

const SearchForm: React.FC = () => {
	return (
		<ThemeContext.Consumer>
			{({ searchOpen, toggleSearch }) => (
				<div className="SearchForm" data-open={searchOpen}>
					<div className="search-box">
						<div className="buttons">
							<Button variant="icon" onClick={toggleSearch}>
								<Icon type="cross" />
							</Button>
						</div>
						<h2 className="heading-2">Modal Open</h2>
					</div>
				</div>
			)}
		</ThemeContext.Consumer>
	);
};

export default SearchForm;
