import React from 'react';

import { Link } from 'react-router';

const ShelterBox = props => {

  return(
    <div>
      <h2>Shelter:</h2>
      <p>{props.name}</p>
    </div>
  )
}

export default ShelterBox;
