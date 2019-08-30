import React, { Component } from 'react';
import { getTopics } from './Api';
import { Link } from '@reach/router';
import Error from './Error';
import './Topics.css';
import Loading from './Loading';

export default class Topics extends Component {
  state = {
    topics: null,
    isLoading: true,
    error: null
  };
  render() {
    const { error, isLoading, topics } = this.state;
    if (isLoading) return <Loading />;
    if (error) return <Error error={error} />;
    if (topics) {
      return (
        <>
          <div className="topics">
            <h1 className="topicsTitle">Go to Topics</h1>
            <ol className="topicsList">
              {topics.map(topic => (
                <div className={topic.slug}>
                  <Link to={`/topics/${topic.slug}/articles`} key={topic.slug}>
                    <li>
                      <p>{topic.slug}</p>
                    </li>
                  </Link>
                </div>
              ))}
            </ol>
          </div>
        </>
      );
    }
  }
  componentDidMount = () => {
    this.fetchTopics();
  };
  fetchTopics = () => {
    getTopics()
      .then(topics => {
        this.setState({ topics, isLoading: false, error: null });
      })
      .catch(error => {
        const {
          response: {
            status,
            data: { msg }
          }
        } = error;
        this.setState({ error: { msg, status }, isLoading: false });
      });
  };
}
