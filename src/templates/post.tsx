import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/Head/SEO';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Anchor from '../components/Anchor';
import slugify from '../helpers/slugify';

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

	const renderProfile: Function = () => {
		return (
			<div className="author-profile">
				{image && <Img className="author-image" fluid={profileFluid} alt={postTitle} />}
				<span className="author-name">{author}</span>
				{twitter && (
					<Anchor
						className="author-twitter"
						url={`https://twitter.com/${twitter}`}
						title={`${author} Twitter account`}
						variant="link external"
					>
						{twitter}
					</Anchor>
				)}
				<span className="post-date">{postDate}</span>
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
				<Img className="post-banner" fluid={bannerFluid} alt={postTitle} />
				<div className="block">
					<div className="block-inner">
						{renderProfile()}
						<div className="body-copy" dangerouslySetInnerHTML={{ __html: html }}></div>
						<ul className="post-tags">{renderTopics()}</ul>
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
