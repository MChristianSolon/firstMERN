import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Joke from './Joke';

function Jokes() {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    Axios.get('http://localhost:5000/jokes').then((jokes) => {
      setJokes(
        jokes.data.map((joke) => {
          return (
            <Joke
              username={joke.username}
              key={joke._id}
              joke={joke.joke}
              id={joke._id}
            />
          );
        })
      );
    });
  }, []);
  return (
    <div>
      funny jokes here
      <ul>{jokes}</ul>
    </div>
  );
}

export default Jokes;
