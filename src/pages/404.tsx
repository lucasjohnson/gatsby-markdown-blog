import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/Head/SEO';
import PostList from '../components/PostList';
import TagList from '../components/TagList';

const ErrorPage: React.FC<ErrorProps> = ({ data }) => {
  const { edges: posts } = data.allFile;
  const allServicesArray: [] = [];
  const allTagsArray: [] = [];

	posts.forEach(({ node }) => {
		const { services, tags } = node.childMarkdownRemark.frontmatter;

    services.forEach(service => {
      allServicesArray.includes(service) === false &&
        allServicesArray.push(service);
    });

    tags.forEach(tag => {
      allTagsArray.includes(tag) === false &&
        allTagsArray.push(tag);
    });
	});

  return (
    <Layout>
  		<SEO title="Error Page" />
  		<section className="Error">
        <div className="block">
          <h1 className="heading-1">404 Page Not Found</h1>
          <p className="body-copy">The page you were looking for doesn't exist.</p>
          <TagList copy="Services offered:" items={allServicesArray} variant="link" />
          <h2 className="heading-2">Recent Posts</h2>
          <PostList posts={posts} />
          <TagList copy="All tags:" items={allTagsArray} variant="link" />
        </div>
  		</section>
  	</Layout>
  );
};

export default ErrorPage;

interface ErrorProps {
	data: {
    allFile: {
      edges: {
        node: {
          childMarkdownRemark: {
            frontmatter: {
              banner: {
                childImageSharp: {
                  fluid: {};
                };
              };
              path: string;
              services: [];
              tags: [];
              title: string;
            };
          };
        };
      }[];
    };
	};
};

export const errorQuery = graphql`
  query {
    allFile(filter: { relativeDirectory: { regex: "/(posts)/" } }) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
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
