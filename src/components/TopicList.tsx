import React from 'react';
import Anchor from './Anchor';
import slugify from '../helpers/slugify';

interface TopicProps {
	topics: string[];
	variant: 'button' | 'link' | 'span';
}

const TopicList: React.FC<TopicProps> = ({ topics, variant }) => {
	const renderTopics: Function = () =>
		topics.map((topic: string, index: number) => {
			return (
				<li className="post-topic" key={index}>
					<Anchor url={`/blog#${slugify(topic)}`} title={topic} variant="link">
						{topic}
					</Anchor>
				</li>
			);
		});

	return <ul className={`post-topics ${variant}`}>{renderTopics()}</ul>;
};

export default TopicList;
