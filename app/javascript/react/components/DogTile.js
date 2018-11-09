import React from 'react';

import { Link } from 'react-router';

const DogTile = props => {
  let remove;
  if (window.currentUser.shelter_id === props.shelter) {
    remove =
    <div>
      <button onClick={props.delete}>Remove Listing</button>
      <Link to={`/chats/${props.shelter}`}>
        <button>View Inquiries</button>
      </Link>
    </div>
  } else {
    remove =
    <Link to={`/chats/${props.shelter}`}>
      <button>Chat With Shelter</button>
    </Link>
  }

  return(
    <div>
      <Link to={`/dogs/${props.id}`}>
        <li>{props.name}</li>
      </Link>
      <Link to={`/dogs/${props.id}`}>
        <img src="http://www.dog-find.com/img/default-image-450.jpg"/>
      </Link>
      {remove}
    </div>
  )
}

export default DogTile;
