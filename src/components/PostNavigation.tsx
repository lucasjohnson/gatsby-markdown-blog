import React from 'react';
import Anchor from '../components/Anchor';
import Icon from '../components/Icon';

const PostNavigation: React.FC<PostNavigationProps> = ({ postNext, postPrev }) => {

  const renderNavigationSection:Function = (post: {childMarkdownRemark: {frontmatter: { path: string; title: string; }; };}, icon: string) => {
    const { path , title } = post.childMarkdownRemark.frontmatter;

    return (
      <React.Fragment>
        <Anchor title={title} url={`/${path}`} variant="link">
          <Icon type={icon} />
          {title}
        </Anchor>
        <p className="body-copy">Previous post</p>
      </React.Fragment>
    )
  };

	return (
		<nav className="post-navigation">
      <div className="post-navigation-section">
        {postPrev && renderNavigationSection(postPrev, 'chevron-left')}
      </div>
      <div className="post-navigation-section">
        {postNext && renderNavigationSection(postNext, 'chevron-right')}
      </div>
		</nav>
	);
};

export default PostNavigation;

interface PostNavigationProps {
	postNext?: {};
	postPrev?: {};
}
