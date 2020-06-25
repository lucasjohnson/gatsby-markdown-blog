import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/Head/SEO';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Anchor from '../components/Anchor';
import Icon from '../components/Icon';
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
	const { fluid: bannerFluid } = banner.childImageSharp;
	const { title: author, twitter, image } = pageContext.postAuthor;
	const { fluid: profileFluid } = image.childImageSharp;
	const { postDate } = pageContext;

	const renderProfile: Function = () => {
		return (
			<div className="author-profile">
				{image && <Img className="author-image" fluid={profileFluid} alt={postTitle} />}
				<div className="author-details">
					<span className="author-name">{author}</span>
					{twitter && (
						<Anchor
							className="author-twitter"
							url={`https://twitter.com/${twitter}`}
							title={`${author} Twitter account`}
							variant="link external"
						>
							<Icon type="Twitter" />
							{twitter}
						</Anchor>
					)}
					<span className="post-date">{postDate}</span>
				</div>
			</div>
		);
	};

	return (
		<Layout>
			<SEO
				banner={bannerFluid.src}
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
				<Img className="post-banner" fluid={bannerFluid} alt={bannerAlt} />
				<div className="block">
					<div className="block-inner">
						{renderProfile()}
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
