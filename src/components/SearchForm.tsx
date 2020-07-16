import React from 'react';
import ThemeContext from '../context/ThemeContext';
import { useStaticQuery, graphql } from 'gatsby';
import { motion } from 'framer-motion';
import Button from './Button';
import Icon from './Icon';

const SearchForm: React.FC = () => {

  const Searchdata = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        nodes {
          frontmatter {
            title
            tags
            services
            path
          }
          html
        }
      }
    }
  `);

  const searchVariants = {
		open: { visibility: `visible`, opacity: 1 },
		closed: { visibility: `hidden`, opacity: 0 }
	};

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
				</motion.div>
			)}
		</ThemeContext.Consumer>
	);
};

export default SearchForm;
