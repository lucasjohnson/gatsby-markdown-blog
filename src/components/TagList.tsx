import React from 'react';
import Anchor from './Anchor';
import Button from './Button';
import Icon from './Icon';
import slugify from '../helpers/slugify';

const TagList: React.FC<TagListProps> = ({ copy, items, variant, onClickFunction }) => {
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
						<Button className="tag-list-button" onClickFunction={(event) => onClickFunction(event, tag)}>
							{tag}
							<Icon type="cross" />
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

interface TagListProps {
	copy?: string;
	items: string[];
	onClickFunction?: (event: MouseEvent, item: string) => void;
	variant: 'button' | 'link' | 'span';
}
