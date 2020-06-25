import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/Head/SEO';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import AuthorDetails from '../components/AuthorDetails';
import TopicList from '../components/TopicList';

interface PostProps {
	data: {
		markdownRemark: {
			frontmatter: {
				abstract: string;
				banner: {
					childImageSharp: {
						fluid: {
							src: string;
						};
					};
				};
				bannerAlt: string;
				date: string;
				path: string;
				title: string;
				topics: [];
			};
			html: string;
		};
	};
	pageContext: {
		postAuthor: {
			title: string;
			twitter: string;
			image: {
				childImageSharp: {
					fluid: {};
				};
			};
		};
		postDate: string;
	};
}

const Post: React.FC<PostProps> = ({ data, pageContext }) => {
	const { markdownRemark } = data;
	const { frontmatter, html } = markdownRemark;
	const { abstract, banner, bannerAlt, date, path, title: postTitle, topics } = frontmatter;
	const { fluid } = banner.childImageSharp;

	return (
		<Layout>
			<SEO
				banner={fluid.src}
				bannerAlt={bannerAlt}
				contentType={`NewsArticle`}
				date={date}
				description={abstract}
				pathname={path}
				title={postTitle}
			/>
			<article className="Post">
				<div className="block">
					<div className="block-inner">
						<h1 className="heading-1">{postTitle}</h1>
					</div>
				</div>
				<Img className="post-banner" fluid={fluid} alt={bannerAlt} />
				<div className="block">
					<div className="block-inner">
						<AuthorDetails data={pageContext} postTitle={postTitle} variant="brief" />
						<div className="markdown" dangerouslySetInnerHTML={{ __html: html }}></div>
						<TopicList topics={topics} variant="link" />
					</div>
				</div>
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
