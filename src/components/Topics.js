import React, { Component } from 'react';
import { getTopics } from './Api';
import { Link } from '@reach/router';


export default class Topics extends Component {
  state = {
    topics: null,
    isLoading: true,
    error: null
  };
  render() {
    const { error, isLoading, topics } = this.state;
    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Ooops...</p>;
    if (topics) {
      return (
        <>
          <div>
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
    getTopics().then(topics => {
      this.setState({ topics, isLoading: false });
    });
  };
  //   handleChange = e => {
  //     this.setState({ value: e.target.value });
  //   };
  //   handleSubmit(e) {
  //     e.preventDefault();
  //   }
}
