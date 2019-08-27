// import React from 'react';
import axios from 'axios';

export const getData = (topic_slug, sort) => {
    console.log(sort, 2222);
  let URL = 'https://loris-nc-news.herokuapp.com/api/articles';
  return axios
    .get(URL, { params: { topic: topic_slug, sort_by: sort } })
    .then(({ data: { articles } }) => {
      return articles;
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
  console.log(article_id);
  const URL = `https://loris-nc-news.herokuapp.com/api/articles/${article_id}/comments`;
  return axios.get(URL).then(({ data: { comments } }) => {
    return comments;
  });
};
