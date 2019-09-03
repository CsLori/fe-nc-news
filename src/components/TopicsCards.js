import React from 'react';
import { Link } from '@reach/router';

const TopicsCards = ({ topics }) => {
  return (
    <div>
      <ol className="topicsList">
        {topics.map(topic => (
          <div className={topic.slug} key={topic.slug}>
            <Link to={`/topics/${topic.slug}/articles`}>
              <li>
                <p>{topic.slug}</p>
              </li>
            </Link>
          </div>
        ))}
      </ol>
    </div>
  );
};

export default TopicsCards;
