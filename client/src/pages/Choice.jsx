import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../utils/auth';

const Choice = () => {
  return (
    <div>
      <h1>
        What do you want to do today <span className="text-header uppercase">{Auth.getProfile().data.username}</span> ?
      </h1>
      <div>
        <Link to="/categories">Study</Link>
        <Link to="/quiz">Take Quiz</Link>
      </div>
    </div>
  );
};

export default Choice;
