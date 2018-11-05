import React from 'react';

const DogTile = props => {

  let remove;
  if (window.currentUser.shelter_id === props.shelter) {
    remove = <button onClick={props.delete}>Remove Listing</button>
  }

  return(
    <div>
      <li>{props.name}</li>
      {remove}
    </div>
  )
}

export default DogTile;
