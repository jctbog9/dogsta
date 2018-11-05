import React from 'react';

import { Link } from 'react-router';

const DogBox = props => {
  return(
    <div>
      <h2>{props.name}</h2>
      <p>{props.story}</p>
      <p>{props.age}</p>
    </div>
  )
}

export default DogBox;
