import React from 'react';
import Anchor from '../components/Anchor';
import Icon from '../components/Icon';

const PostNavigation: React.FC<PostNavigationProps> = ({ postNext, postPrev }) => {
	return (
		<nav className="post-navigation">
			{postPrev && (
				<Anchor
					title={postPrev.childMarkdownRemark.frontmatter.title}
					url={`/${postPrev.childMarkdownRemark.frontmatter.path}`}
					variant="link"
				>
					<Icon type="chevron-left" />
					{postPrev.childMarkdownRemark.frontmatter.title}
				</Anchor>
			)}
			{postNext && (
				<Anchor
					title={postNext.childMarkdownRemark.frontmatter.title}
					url={`/${postNext.childMarkdownRemark.frontmatter.path}`}
					variant="link"
				>
					{postNext.childMarkdownRemark.frontmatter.title}
					<Icon type="chevron-right" />
				</Anchor>
			)}
		</nav>
	);
};

export default PostNavigation;

interface PostNavigationProps {
	postNext?: {
		childMarkdownRemark: {
			frontmatter: {
				path: string;
				title: string;
			};
		};
	};
	postPrev?: {
		childMarkdownRemark: {
			frontmatter: {
				path: string;
				title: string;
			};
		};
	};
}
