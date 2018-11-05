import React from 'react';

import { Link } from 'react-router';

const ShelterBox = props => {

  return(
    <div>
      <h2>Shelter:</h2>
      <Link to={`/shelters/${props.id}`}>
        <p>{props.name}</p>
      </Link>
    </div>
  )
}

export default ShelterBox;
