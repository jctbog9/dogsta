import React from 'react';

const DogTile = props => {

  return(
    <div>
      <li>{props.name}</li>
      <button onClick={props.delete}>Remove Listing</button>
    </div>
  )
}

export default DogTile;
