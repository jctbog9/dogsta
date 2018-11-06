import React from 'react';

import { Link } from 'react-router';

const ShelterBox = props => {

  let adopt;
  if (window.currentUser.role === "member") {
    adopt =
    <Link to={`/chats/1`}>
      <button>Adopt {props.dog.name}</button>
    </Link>
  }

  return(
    <div>
      <h2>Shelter:</h2>
      <Link to={`/shelters/${props.id}`}>
        <p>{props.name}</p>
      </Link>
      {adopt}
    </div>
  )
}

export default ShelterBox;
