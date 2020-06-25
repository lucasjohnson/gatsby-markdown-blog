import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/Head/SEO';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import slugify from '../helpers/utils';

interface PostProps {
	data: {
		markdownRemark: {
			frontmatter: {
				author: string;
				abstract: string;
				banner: {
					childImageSharp: {
						fluid: {
							src: string;
						};
					};
				};
				date: string;
				path: string;
				title: string;
				topics: [];
			};
			html: string;
		};
	};
}

const Post: React.FC<PostProps> = ({ data }) => {
	const { markdownRemark } = data;
	const { frontmatter, html } = markdownRemark;
	const { author, abstract, banner, date, path, title, topics } = frontmatter;
	const { fluid } = banner.childImageSharp;

	const renderTopics: Function = () =>
		topics.map((topic: string, index: number) => {
			return (
				<li className="post-tag" key={index}>
					<Link className="link" to={`/topics/${slugify(topic)}`} title={`Link to ${topic}`}>
						{topic}
					</Link>
				</li>
			);
		});

	return (
		<Layout>
			<SEO
				banner={fluid.src}
				bannerAlt={title}
				contentType={`NewsArticle`}
				date={date}
				description={abstract}
				pathname={path}
				title={title}
			/>
			<article className="Post block">
				<h1 className="heading-1">{title}</h1>
				<Img fluid={fluid} alt={title} />
				<div className="post-author">{author}</div>
				<p className="post-date">{date}</p>
				<div className="body-copy" dangerouslySetInnerHTML={{ __html: html }}></div>
				<ul className="post-tags">{renderTopics()}</ul>
			</article>
		</Layout>
	);
};

export default Post;

export const pageQuery = graphql`
	query($pathSlug: String!) {
		markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
			html
			frontmatter {
				author
				abstract
				date
				path
				title
				topics
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
