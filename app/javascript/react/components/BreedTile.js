import React from 'react';
import { Link } from 'react-router';

const BreedTile = props => {
  let content;
  if (props.name === null) {
    content = null
  } else {
    content =
      <div className="shelter-dog-box">
        <Link to={`/breeds/${props.id}`}>
          <li>{props.name}</li>
        </Link>
      </div>
  }

  return(
    <div>
      {content}
    </div>
  )
}

export default BreedTile;
