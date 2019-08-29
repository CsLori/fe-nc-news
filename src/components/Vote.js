import React, { Component } from 'react';
import { voteArticle } from './Api';

class Vote extends Component {
  state = { voteDifference: 0 };
  render() {
    const { voteDifference } = this.state;
    const { votes } = this.props;
    return (
      <>
      <div className="voteButton">
        <button
          className="upArrow"
          onClick={() => this.updateVote(1)}
          disabled={voteDifference === 1}
        >
          <img src={'/img/up-arrow.jpg'} alt="up-arrow" />
        </button>
        <p className="votes">Votes:{votes + voteDifference}</p>
        <button
          className="downArrow"
          onClick={() => this.updateVote(-1)}
          disabled={voteDifference === -1 || votes + voteDifference === 0}
        >
          {/* <img src={'/img/redcross.jpg'} alt="down-arrow" /> */}
          <img src={'/img/down-arrow.jpg'} alt="down-arrow" />
        </button>
        </div>
      </>
    );
  }
  updateVote = voteChange => {
    const { article_id } = this.props;
    voteArticle(article_id, voteChange);
    this.setState(currentState => {
      return { voteDifference: currentState.voteDifference + voteChange };
    });
  };
}

export default Vote;
