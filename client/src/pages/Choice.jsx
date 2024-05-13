import React from 'react';
import { Link } from 'react-router-dom';

const Choice = () => {
  return (
    <div>
      <h1>What do you want to do today?</h1>
      <div>
        <Link to="/categories">Study</Link>
        <Link to="/quiz">Take Quiz</Link>
      </div>
    </div>
  );
};

export default Choice;
