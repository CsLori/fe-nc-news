import React from 'react';
import { VoteComment } from './VoteComment';

const CommentsCard = props => {
  console.log(props);
  const { isLoggedIn, comments } = props;
  return (
    <div>
      <ol>
        {comments.map(comment => (
          <li key={comment.comment_id}>
            <div className="commentTop">
              <p>{comment.author}</p>
              <p>{new Date(comment.created_at).toLocaleString()}</p>
            </div>
            <p className="commentsCommentBody">{comment.body}</p> <br />
            <br />
            <VoteComment
              className="voteButtons"
              comment_id={comment.comment_id}
              votes={comment.votes}
            />
            {comment.author === isLoggedIn && (
              <button
                className="deleteButton"
                onClick={() => props.removeComment(comment.comment_id)}
              >
                Delete comment
              </button>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default CommentsCard;
