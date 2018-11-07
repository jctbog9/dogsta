import React from 'react';

import { Link } from 'react-router';

const DogTile = props => {
  let chat;
  if (window.currentUser.shelter_id !== props.shelter) {
    chat =
    <Link to={`/chats/${props.shelter}`}>
      <button>Chat With Shelter</button>
    </Link>
  } else {
    chat =
    <Link to={`/chats/${props.shelter}`}>
      <button>View Inquiries</button>
    </Link>
  }

  return(
    <div>
      <Link to={`/dogs/${props.id}`}>
        <li>{props.name}</li>
      </Link>
      {chat}
    </div>
  )
}

export default DogTile;
