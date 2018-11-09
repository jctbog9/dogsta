import React from 'react';
import { Link } from 'react-router';

const BreedBox = props => {
  let content;
  if (props.breedName == null) {
    content = null
  } else {
    content =
      <div>
        <div className="header">
          <Link to={`/breeds/${props.id}`}>
            {props.breedName}
          </Link>
        </div>
        <div className="description">
          <p>{props.description}</p>
        </div>
        <Link to={`/breeds/${props.id}`}>
          <img src={props.photo}/><br/>
        </Link>
      </div>
  }

  return(
    <div className="breed-box">
      {content}
      <i className="fas fa-arrow-circle-right fa-5x" onClick={props.handleRandomBreed}></i>
    </div>
  )
}

export default BreedBox;
