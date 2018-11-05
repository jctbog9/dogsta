import React from 'react';

import { Link } from 'react-router';

const DogTile = props => {

  let remove;
  if (window.currentUser.shelter_id === props.shelter) {
    remove = <button onClick={props.delete}>Remove Listing</button>
  }

  return(
    <div>
      <Link to={`/dogs/${props.id}`}>
        <li>{props.name}</li>
      </Link>
      {remove}
    </div>
  )
}

export default DogTile;
