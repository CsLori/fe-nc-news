// import React from 'react';
import axios from 'axios';

export const getData = topic_slug => {
  console.log(topic_slug, 2222);
  let URL = 'https://loris-nc-news.herokuapp.com/api/articles';
  return axios
    .get(URL, { params: { topic: topic_slug } })
    .then(({ data: { articles } }) => {
    //   console.log(articles, 'api');
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
    //   console.log(topics, '!!!!!');
    return topics;
  });
};
