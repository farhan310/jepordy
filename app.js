import React from 'react';
import ReactDOM from 'react-dom';
import jepordyGame from './components/ajax';

const App = () => {
  const [input, setInput] = React.useState("");
  const [clue, setClue] = React.useState({});


  const fetchClue = async () => {
      const response = await fetch('https://jservice.io/api/random');
      const data = await response.json();
      setClue(data[0]);

  React.useEffect(() => {
    fetchClue();
  }, []);

  return(
    <>
     <main>
        <div>
          <h1 id="category">
            value={category}
          </h1>
          <h2 id="clue">
            value={clue}
          </h2>
        </div>
      
        <form>
          <label htmlFor="user-response">What is</label>
          <input id="user-response" className="userResponse" autocomplete="off" disabled/>
          <button id="submit" disabled>Submit</button>
        </form>
      
        <h3>Your Score: $<span id="score">{score}</span></h3>
        <button id="new-clue-button">Next Clue, Jehan</button>
      </main>
    </>
  );
};
ReactDOM.render(<App />, document.querySelector('#root'));