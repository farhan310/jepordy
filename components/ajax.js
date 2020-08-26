import React from 'react';

const jepordyGame = props => {
  const { category, clue, score } = props;

  return (
    <div className="jepordy">
      <h1>{category}</h1>
      <h2> {clue} </h2>
      <h3>{score}</h3>
    </div>
  );
};

export default jepordyGame;
