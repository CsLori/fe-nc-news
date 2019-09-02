import React from 'react';
import Topics from './TopicsList';

function Home() {
  return (
    <div>
      <h1 className="home">Homepage</h1>
      <Topics path="/topics" />
    </div>
  );
}

export default Home;
