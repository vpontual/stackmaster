import React from 'react';

const Choice = () => {
  const handleStudyClick = () => {
    // Implement navigation to the study category selection page
    console.log('Study button clicked');
  };

  const handleQuizClick = () => {
    // Implement navigation to the quiz page
    console.log('Quiz button clicked');
  };

  return (
    <div>
      <h1>Welcome to the Learning App</h1>
      <div>
        <button onClick={handleStudyClick}>Study</button>
        <button onClick={handleQuizClick}>Take Quiz</button>
      </div>
    </div>
  );
};

export default Choice;
