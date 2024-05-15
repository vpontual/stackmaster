import React from 'react';
import { Link } from 'react-router-dom';

const Choice = () => {
  return (
    <div>
      <h1 className="flex justify-center p-20 text-header">What do you want to do today?</h1>
      <div className="flex justify-center space-x-20 pt-20 ">
        <div className="flex justify-center items-center w-80 h-40 bg-banner text-5xl ">
        <Link to="/categories"className="text-green-600 hover:text-green-800">Study</Link>
        </div>
        <div className="flex justify-center items-center w-80 h-40 bg-banner text-5xl">
        <Link to="/quiz">Take Quiz</Link>
        </div>
      </div>
    </div>
  );
};

export default Choice;
