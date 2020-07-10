import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/Head/SEO';
import PostList from '../components/PostList';

const ErrorPage: React.FC<ErrorProps> = ({ data }) => {
  const { edges: posts } = data.allFile;

  return (
    <Layout>
  		<SEO title="Error Page" />
  		<section className="Error">
        <div className="block">
          <h1 className="heading-1">404 Page Not Found</h1>
          <h1 className="heading-2">Recent Posts</h1>
          <PostList posts={posts} />
        </div>
  		</section>
  	</Layout>
  );
};

export default ErrorPage;

interface ErrorProps {
	data: {
    allFile: {
      edges: [];
    };
	};
};

export const errorQuery = graphql`
  query {
    allFile(filter: { relativeDirectory: { regex: "/(posts)/" } }) {
      edges {
        node {
          childMarkdownRemark {
            html
            frontmatter {
              abstract
              author
              banner {
                childImageSharp {
                  fluid {
                    aspectRatio
                    base64
                    sizes
                    src
                    srcSet
                  }
                }
              }
              date(formatString: "MMMM DD, YYYY")
              path
              services
              tags
              title
            }
          }
        }
      }
    }
  }
`;
