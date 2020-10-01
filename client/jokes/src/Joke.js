import React from 'react';
import Axios from 'axios';

function Joke({ username, joke, id }) {
  const handleClick = () => {
    Axios.delete(`http://localhost:5000/jokes/${id}`)
      .then((res) => console.log('Joke Destroyed'))
      .catch((err) => console.log(err));
  };

  const handleEdit = () => {
    alert("You didn't make this yet you idiot!");
  };

  return (
    <li>
      <h1>
        {username} : {joke}
      </h1>
      <br />
      <button onClick={handleClick}>delete</button>
      <button onClick={handleEdit}>edit</button>
    </li>
  );
}

export default Joke;
