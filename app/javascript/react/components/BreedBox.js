import React from 'react';

const BreedBox = props => {
  let content;
  if (props.breedName == null) {
    content = null
  } else {
    content =
      <div>
        <h2>{props.breedName}</h2>
        <p>{props.description}</p>
        <img src={props.photo}/><br/>
      </div>
  }

  return(
    <div className="breed-box">
      {content}
      <button onClick={props.handleRandomBreed}>Random Breed</button>
    </div>
  )
}

export default BreedBox;
