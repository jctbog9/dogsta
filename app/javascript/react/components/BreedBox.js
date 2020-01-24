import React from 'react';
import { Link } from 'react-router';

const BreedBox = ({ id, imageUrl, breedName, handleRandomBreed }) => {
  let content;
  if (breedName == null) {
    content = null
  } else {
    content =
      <div>
        <Link to={`/breeds/${id}`}>
          <div className="header">
            {breedName}
          </div>
          <div className="image-container">
            <img src={imageUrl}/>
          </div>
        </Link>
      </div>
  }

  return(
    <div className="breed-box">
      {content}
      <i className="fas fa-arrow-circle-right fa-5x" onClick={handleRandomBreed}></i>
    </div>
  )
}

export default BreedBox;
