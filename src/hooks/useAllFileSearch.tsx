import { useStaticQuery, graphql } from 'gatsby';

export const useAllFileSearch = () => {
  const searchdata: {
    allMarkdownRemark: {
      nodes: {
        html: string;
        frontmatter: {
          title: string;
          tags: [];
          services: [];
          path: string;
          html: string;
        };
      }[];
    };
  } = useStaticQuery(graphql`
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

  const searchObject: Function = () => {
    searchdata.allMarkdownRemark.nodes.forEach(node => {
      const { html, frontmatter } = node;
      frontmatter.html = html;
      delete node.html;
    });

    return searchdata;
  };

  const { nodes } = searchObject().allMarkdownRemark;

  return nodes;
};
