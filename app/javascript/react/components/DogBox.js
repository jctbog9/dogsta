import React from 'react';

import { Link } from 'react-router';

const DogBox = props => {
  return(
    <div>
      <div className="header">
        <h2>{props.name}</h2>
      </div>
      <div className="description">
        <p>Story:</p>
        <p>{props.story}</p>
        <p>Age:</p>
        <p>{props.age}</p>
      </div>
    </div>
  )
}

export default DogBox;
