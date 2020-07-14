import React from 'react';
import ThemeContext from '../context/ThemeContext';
import Button from './Button';
import Icon from './Icon';

const SearchForm: React.FC<SearchFormProps> = ({ searchOpen }) => {
	return (
		<ThemeContext.Consumer>
			{({ searchOpen }) => (
				<div className="SearchForm" data-open={searchOpen}>
					<div className="search-box">
						<div className="buttons">
							<ThemeContext.Consumer>
								{({ toggleSearch }) => (
									<Button variant="icon" onClick={toggleSearch}>
										<Icon type="cross" />
									</Button>
								)}
							</ThemeContext.Consumer>
						</div>
						<h2 className="heading-2">Modal Open</h2>
					</div>
				</div>
			)}
		</ThemeContext.Consumer>
	);
};

export default SearchForm;

interface SearchFormProps {
	searchOpen: boolean;
}
