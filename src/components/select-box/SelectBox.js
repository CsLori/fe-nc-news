import React, { Component } from 'react';
// import './SelectBox.css';
import { navigate } from '@reach/router';

class SelectBox extends Component {
  state = {
    topics: ['coding', 'football', 'cooking']
  };
  render() {
    const { topics } = this.state;
    return (
      <select className="dropDown" placeholder="Select topic" onChange={this.handleChange}>
        {topics.map(topic => (
          <option key={topic} value={topic}>
            {topic}
          </option>
        ))}
      </select>
    );
  }
  handleChange = e => {
    const topic = e.target.value;
    if (topic) {
      navigate(`/topics/${topic}/articles`);
    }
  };
}
export default SelectBox;
