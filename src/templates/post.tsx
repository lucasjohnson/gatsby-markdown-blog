import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/Head/SEO';
import Img from 'gatsby-image';
import AuthorDetails from '../components/AuthorDetails';
import TagList from '../components/TagList';
import PostList from '../components/PostList';
import PostNavigation from '../components/PostNavigation';

const Post: React.FC<PostProps> = ({ pageContext }) => {
	const { allTags, frontmatter, html, postNext, postPrev, postAuthor: author, relatedPosts } = pageContext;
	const { abstract, banner, bannerAlt, date, path, services, tags, title } = frontmatter;
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
						<footer className="post-footer">
							<PostNavigation postNext={postNext} postPrev={postPrev} />
              <TagList copy={'Related serivces:'} items={services} variant="link" />
  						<TagList copy={'Tagged under:'} items={tags} variant="link" />
							<h2 className="heading-2">Related Posts</h2>
							<PostList posts={relatedPosts} />
							<TagList copy={'All tags:'} items={allTags} variant="link" />
							<AuthorDetails author={author} date={date} title={title} variant="full" />
						</footer>
					</div>
				</div>
			</article>
		</Layout>
	);
};

export default Post;

interface PostProps {
	pageContext: {
		allTags: [];
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
