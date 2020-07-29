import React from 'react';
import Anchor from './Anchor';
import Button from './Button';
import slugify from '../helpers/slugify';

const TagList: React.FC<TagProps> = ({ copy, items, variant, filterPostsByTag }) => {
	const renderTags: Function = () =>
		items.map((tag: string, index: number) => {
			let tagElement;

			switch (variant) {
				case `link`:
					tagElement = (
						<Anchor className="tag-list-link" url={`/${slugify(tag)}`} title={tag} variant="link">
							{tag}
						</Anchor>
					);
					break;
				case `button`:
					tagElement = (
						<Button className="tag-list-button" onClick={() => filterPostsByTag(tag)}>
							{tag}
						</Button>
					);
					break;
				case `span`:
					tagElement = <span className="tag-list-link">{tag}</span>;
					break;
				default:
					return null;
			}

			return (
				<li className="tag-list-item" key={index}>
					{tagElement}
				</li>
			);
		});

	return (
		<div className="tag-list">
			{copy && <span className="tag-list-copy body-copy">{copy}</span>}
			<ul className={`tag-list-items ${variant}`}>{renderTags()}</ul>
		</div>
	);
};

export default TagList;

interface TagProps {
	copy?: string;
	items: string[];
	variant: 'button' | 'link' | 'span';
	filterPostsByTag?: (item: string) => void;
}
