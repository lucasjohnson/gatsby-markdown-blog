import React, { useState } from 'react';
import ThemeContext from '../context/ThemeContext';
import { motion } from 'framer-motion';
import Fuse from 'fuse.js';
import Button from './Button';
import Icon from './Icon';
import Anchor from './Anchor';
import { useAllFileSearch } from '../hooks/useAllFileSearch';

const SearchForm: React.FC = () => {

  const options = {
    includeMatches: false,
    keys: [
      'frontmatter.html',
      'frontmatter.services',
      'frontmatter.tags',
      'frontmatter.title'
    ]
  };

  const fuse = new Fuse(useAllFileSearch(), options);

  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const searchVariants = {
		open: { visibility: `visible`, opacity: 1 },
		closed: { visibility: `hidden`, opacity: 0 }
	};

  const renderResults: Function = () =>
    results.map((
      result: {
        item: {
          frontmatter: {
            path: string;
            title: string;
          };
        };
      }, index: number) => {
      const { path, title } = result.item.frontmatter;
      return (
        <li className="results-item" key={index}>
          <Anchor title={title} url={path} variant='link'>{title}</Anchor>
        </li>
      );
    });

  return (
		<ThemeContext.Consumer>
			{({ searchOpen, toggleSearch }) => (
				<motion.div
          className="SearchForm"
          initial="closed"
          animate={searchOpen ? `open` : `closed`}
          variants={searchVariants}
          transition={{ duration: 0.2 }}
          >
          <div className="search-wrapper">
            <div className="block">
              <form className="search-form">
                <input
                  className="search-field"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  onKeyUp={() => setResults(fuse.search(query))}
                  type="text"
                  placeholder="What are you looking for?"
                  autoComplete="off"
                />
              </form>
              <ul className="results-items">
                {renderResults()}
              </ul>
              <div className="buttons">
                <Button variant="icon" onClick={toggleSearch}>
                  <Icon type="cross" />
                </Button>
              </div>
            </div>
          </div>
          <div className="overlay"></div>
				</motion.div>
			)}
		</ThemeContext.Consumer>
	);
};

export default SearchForm;
