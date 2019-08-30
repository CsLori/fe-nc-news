import React, { Component } from 'react';
import { voteCommentById } from './Api';

export class VoteComment extends Component {
  state = { voteDifference: 0 };
  render() {
    const { voteDifference } = this.state;
    const { votes } = this.props;
    return (
      <>
        <button
          className="upArrow"
          onClick={() => this.updateCommentVote(1)}
          disabled={voteDifference === 1}
        >
          <img src={'/img/up-arrow.jpg'} alt="up-arrow" />
        </button>
        <p className="votes">Votes:{votes + voteDifference}</p>
        <button
          className="downArrow"
          onClick={() => this.updateCommentVote(-1)}
          disabled={voteDifference === -1 || votes + voteDifference === 0}
        >
          {/* <img src={'/img/redcross.jpg'} alt="down-arrow" /> */}
          <img src={'/img/down-arrow.jpg'} alt="down-arrow" />
        </button>
      </>
    );
  }
  updateCommentVote = voteCommentChange => {
    const { comment_id } = this.props;
    voteCommentById(comment_id, voteCommentChange);
    this.setState(currentState => {
      return {
        voteDifference: currentState.voteDifference + voteCommentChange
      };
    });
  };
}