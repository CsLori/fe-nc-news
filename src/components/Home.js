import React, { Component } from 'react';
import ArticlesList from './ArticlesList';
class Home extends Component {
  render() {
    return (
      <div>
        <h2>Homepage</h2>
        {/* <SelectBox
          width={200}
          items={[
            { value: 'Coding', id: 1 },
            { value: 'Cooking', id: 2 },
            { value: 'Football', id: 3 }
          ]}
        /> */}
        <ArticlesList path="/articles" />
      </div>
    );
  }
}

export default Home;
