import React from 'react';
import ThemeContext from '../context/ThemeContext';
import Button from './Button';
import Icon from './Icon';

const SearchForm: React.FC = () => {
	return (
		<ThemeContext.Consumer>
			{({ searchOpen, toggleSearch }) => (
				<div className="SearchForm" data-open={searchOpen}>
          <div className="search-wrapper">
            <div className="block">
              <form className="search-form">
                <input className="search-field" type="text" name="name" placeholder="What are you looking for?" autocomplete="off" />
              </form>
              <div className="buttons">
                <Button variant="icon" onClick={toggleSearch}>
                  <Icon type="cross" />
                </Button>
              </div>
            </div>
          </div>
          <div className="overlay"></div>
				</div>
			)}
		</ThemeContext.Consumer>
	);
};

export default SearchForm;
