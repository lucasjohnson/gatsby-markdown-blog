import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Post = ({ data }) => {
	const { markdownRemark } = data;
	const { frontmatter, html } = markdownRemark;
	const { banner, date, title } = frontmatter;
	const { fluid } = banner.childImageSharp;

	return (
		<Layout>
			<article className="Post">
				<div className="block">
					<div className="grid-flex">
						<div className="column-12">
							<h1 className="heading-1">{title}</h1>
							<Img fluid={fluid} alt={title} />
							<p className="article-date">{date}</p>
							<div dangerouslySetInnerHTML={{ __html: html }}></div>
							<ul className="tag-items">
								<li className="tag-item">
									<Link className="tag-link" to="/">
										Tag
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</article>
		</Layout>
	);
};

export default Post;

export const pageQuery = graphql`
	query($path: String!) {
		markdownRemark(fields: { slug: { eq: $path } }) {
			html
			fields {
				slug
			}
			frontmatter {
				abstract
				date(formatString: "MMMM DD, YYYY")
				featured
				title
				banner {
					childImageSharp {
						fluid {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		}
	}
`;
