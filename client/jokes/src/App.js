import React, { useState } from 'react';
import Jokes from './Jokes';
import Axios from 'axios';
import './App.css';

function App() {
  const [newJoke, setNewJoke] = useState('');
  const [username, setUserName] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log(username + ': ' + newJoke);
    let amazingJoke = {
      username,
      joke: newJoke,
    };
    Axios.post('http://localhost:5000/jokes/add', amazingJoke).then((res) =>
      console.log(res.data)
    );

    setUserName('');
    setNewJoke('');
  }

  function handleJoke(event) {
    setNewJoke(event.target.value);
  }

  function handleUserName(event) {
    setUserName(event.target.value);
  }

  return (
    <div className="App">
      <div style={{ border: '1px solid black' }}>
        <h1>Enter A joke</h1>
        <form action="" onSubmit={handleSubmit} autoComplete="off">
          <input
            type="text"
            name="username"
            placeholder="username"
            value={username}
            onChange={handleUserName}
          />
          <input
            type="text"
            name="joke"
            placeholder="joke"
            value={newJoke}
            onChange={handleJoke}
            autoComplete="off"
          />
          <button type="submit">Submit Joke</button>
        </form>
      </div>
      <Jokes />
    </div>
  );
}

export default App;
