import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/Head/SEO';
import Img from 'gatsby-image';
import AuthorDetails from '../components/AuthorDetails';
import TagList from '../components/TagList';
import PostList from '../components/PostList';
import Anchor from '../components/Anchor';
import Icon from '../components/Icon';

const Post: React.FC<PostProps> = ({ pageContext }) => {
	const { frontmatter, html, postNext, postPrev, postAuthor: author, relatedPosts } = pageContext;
	const { abstract, banner, bannerAlt, date, path, title, tags } = frontmatter;
	const { fluid } = banner.childImageSharp;

	const renderPostNavigation: Function = () => {
		const { path: nextPath, title: nextTitle } = postNext.childMarkdownRemark.frontmatter;

		const { path: prevPath, title: prevTitle } = postPrev.childMarkdownRemark.frontmatter;

		return (
			<nav className="post-navigation">
				{postPrev && (
					<Anchor title={prevTitle} url={`/${prevPath}`} variant="link">
						<Icon type="chevron-left" />
						{prevTitle}
					</Anchor>
				)}
				{postNext && (
					<Anchor title={nextTitle} url={`/${nextPath}`} variant="link">
						{nextTitle}
						<Icon type="chevron-right" />
					</Anchor>
				)}
			</nav>
		);
	};

	return (
		<Layout>
			<SEO
				banner={fluid.src}
				bannerAlt={bannerAlt}
				contentType={`NewsArticle`}
				date={date}
				description={abstract}
				pathname={path}
				title={title}
			/>
			<article className="Post">
				<div className="block">
					<div className="block-inner">
						<h1 className="heading-1">{title}</h1>
					</div>
				</div>
				<Img className="post-banner" fluid={fluid} alt={bannerAlt} />
				<div className="block">
					<div className="block-inner">
						<AuthorDetails author={author} date={date} title={title} variant="brief" />
						<div className="markdown" dangerouslySetInnerHTML={{ __html: html }}></div>
						<TagList tags={tags} variant="link" />
					</div>
				</div>
			</article>
			<div className="block">
				<div className="block-inner">
					{renderPostNavigation()}
					<h2 className="heading-2">Related Posts</h2>
					<PostList posts={relatedPosts} />
				</div>
			</div>
		</Layout>
	);
};

export default Post;

interface PostProps {
	pageContext: {
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
			tags: [];
			services: [];
		};
		html: string;
		postAuthor: {
			title: string;
			twitter: string;
			image: {
				childImageSharp: {
					fluid: {};
				};
			};
		};
		postNext: {
			childMarkdownRemark: {
				frontmatter: {
					path: string;
					title: string;
				};
			};
		};
		postPrev: {
			childMarkdownRemark: {
				frontmatter: {
					path: string;
					title: string;
				};
			};
		};
		relatedPosts: [];
	};
}
