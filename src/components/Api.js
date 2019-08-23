import React from 'react';
import axios from 'axios';

const getData = () => {
  const URL = 'https://loris-nc-news.herokuapp.com/api/articles';
  return axios.get(URL).then(({ data: { articles } }) => {
    return articles;
  });
};

export default getData;
