import React, { Component } from 'react';
import { getTopics } from './Api';
import { Link } from '@reach/router';
import Error from './Error';

export default class Topics extends Component {
  state = {
    topics: null,
    isLoading: true,
    error: null
  };
  render() {
    const { error, isLoading, topics } = this.state;
    if (isLoading) return <p>Loading...</p>;
    if (error) return <Error error={error} />;
    if (topics) {
      return (
        <>
          <div>
            <h1>Topics</h1>
            <ol className="topics">
              {topics.map(topic => (
                <Link to={`/topics/${topic.slug}/articles`} key={topic.slug}>
                  <li>{topic.slug}</li>
                </Link>
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
