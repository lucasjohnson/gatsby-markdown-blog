import React from 'react';
import Anchor from './Anchor';
import Button from './Button';
import slugify from '../helpers/slugify';

interface TagProps {
	tags: string[];
	variant: 'button' | 'link' | 'span';
}

const TagList: React.FC<TagProps> = ({ tags, variant }) => {
	const renderTags: Function = () =>
		tags.map((tag: string, index: number) => {
			let tagElement;

			switch (variant) {
				case `link`:
					tagElement = (
						<Anchor url={`/blog#${slugify(tag)}`} title={tag} variant="link">
							{tag}
						</Anchor>
					);
					break;
				case `button`:
					tagElement = <Button variant="primary" />;
					break;
				case `span`:
					tagElement = <span className="link">{tag}</span>;
					break;
				default:
					return null;
			}

			return (
				<li className="post-tag" key={index}>
					{tagElement}
				</li>
			);
		});

	return <ul className={`post-tags ${variant}`}>{renderTags()}</ul>;
};

export default TagList;
