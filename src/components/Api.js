import axios from 'axios';

export const getData = (topic_slug, sort, page) => {
  let URL = 'https://loris-nc-news.herokuapp.com/api/articles';
  return axios
    .get(URL, { params: { topic: topic_slug, sort_by: sort, p: page } })
    .then(({ data }) => {
      return data;
    });
};

export const getSingleArticle = article_id => {
  const URL = `https://loris-nc-news.herokuapp.com/api/articles/${article_id}`;
  return axios.get(URL).then(({ data: { article } }) => {
    return article;
  });
};

export const getTopics = () => {
  const URL = 'https://loris-nc-news.herokuapp.com/api/topics';
  return axios.get(URL).then(({ data: { topics } }) => {
    return topics;
  });
};

export const getComments = article_id => {
  const URL = `https://loris-nc-news.herokuapp.com/api/articles/${article_id}/comments`;
  return axios.get(URL).then(({ data: { comments } }) => {
    return comments;
  });
};

export const insertComment = (article_id, newComment) => {
  const URL = `https://loris-nc-news.herokuapp.com/api/articles/${article_id}/comments`;
  return axios.post(URL, newComment).then(({ data: { comment } }) => {
    return comment;
  });
};

export const deleteComment = comment_id => {
  const URL = `https://loris-nc-news.herokuapp.com/api/comments/${comment_id}`;
  return axios.delete(URL);
};

export const deleteArticle = article_id => {
  const URL = `https://loris-nc-news.herokuapp.com/api/articles/${article_id}`;
  return axios.delete(URL);
};

export const voteArticle = (article_id, voteChange) => {
  const URL = `https://loris-nc-news.herokuapp.com/api/articles/${article_id}`;
  return axios
    .patch(URL, { inc_vote: voteChange })
    .then(({ data: { article } }) => {
      return article;
    });
};

export const voteCommentById = (comment_id, voteCommentChange) => {
  const URL = `https://loris-nc-news.herokuapp.com/api/comments/${comment_id}`;
  return axios
    .patch(URL, { inc_votes: voteCommentChange })
    .then(({ data: { comment } }) => {
      return comment;
    });
};

export const getAllUsers = () => {
  const URL = `https://loris-nc-news.herokuapp.com/api/users`;
  return axios.get(URL).then(({ data: { users } }) => {
    return users;
  });
};
