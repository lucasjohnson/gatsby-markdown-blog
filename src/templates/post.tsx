import React, { ReactElement } from 'react';
import Layout from '../components/Layout';
import SEO from '../components/Head/SEO';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Post = ({ data }): ReactElement => {
	const { markdownRemark } = data;
	const { fields, frontmatter, html } = markdownRemark;
	const { abstract, banner, date, title } = frontmatter;
	const { fluid } = banner.childImageSharp;
	const { slug } = fields;

	return (
		<Layout>
			<SEO
				banner={fluid.src}
				bannerAlt={title}
				contentType={`NewsArticle`}
				date={date}
				description={abstract}
				pathname={slug}
				title={title}
			/>
			<article className="Post">
				<div className="block">
					<div className="grid-flex">
						<div className="column-12">
							<h1 className="heading-1">{title}</h1>
							<Img fluid={fluid} alt={title} />
							<p className="post-date">{date}</p>
							<div dangerouslySetInnerHTML={{ __html: html }}></div>
							<ul className="post-tags">
								<li className="post-tag">
									<Link className="post-tag-link" to="/">
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
				date
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
