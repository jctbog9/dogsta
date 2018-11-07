import React from 'react';
import { Link } from 'react-router';

const BreedTile = props => {
  let content;
  if (props.name === null) {
    content = null
  } else {
    content =
      <div>
        <Link to={`/breeds/${props.id}`}>
          {props.name}
        </Link>
      </div>
  }

  return(
    <div className="breed-box">
      {content}
    </div>
  )
}

export default BreedTile;
