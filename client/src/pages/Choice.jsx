import React from 'react';
import { Link } from 'react-router-dom';

const Choice = () => {
  return (
    <div>
      <h1 className="flex justify-center pb-10">What do you want to do today?</h1>
      <div className="flex justify-evenly pt-20 ">
        <div className="flex justify-center items-center w-80 h-40 bg-slate-400 text-5xl">
        <Link to="/categories">Study</Link>
        </div>
        <div className="flex justify-center items-center w-80 h-40 bg-slate-400 text-5xl">
        <Link to="/quiz">Take Quiz</Link>
        </div>
      </div>
    </div>
  );
};

export default Choice;
