import React from 'react';
import Anchor from './Anchor';
import Button from './Button';
import slugify from '../helpers/slugify';

interface TopicProps {
	topics: string[];
	variant: 'button' | 'link' | 'span';
}

const TopicList: React.FC<TopicProps> = ({ topics, variant }) => {
	const renderTopics: Function = () =>
		topics.map((topic: string, index: number) => {
			let tagElement;

			switch (variant) {
				case `link`:
					tagElement = (
						<Anchor url={`/blog#${slugify(topic)}`} title={topic} variant="link">
							{topic}
						</Anchor>
					);
					break;
				case `button`:
					tagElement = <Button variant="primary" />;
					break;
				case `span`:
					tagElement = <span className="link">{topic}</span>;
					break;
				default:
					return null;
			}

			return (
				<li className="post-topic" key={index}>
					{tagElement}
				</li>
			);
		});

	return <ul className={`post-topics ${variant}`}>{renderTopics()}</ul>;
};

export default TopicList;
