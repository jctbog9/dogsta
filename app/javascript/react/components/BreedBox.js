import React from 'react';

const BreedBox = props => {
  return(
    <div>
      <p>this is the breed box</p>
      <p>{props.breedName}</p>
      <p>{props.description}</p>
      <img src={props.photo}/><br/>
      <button onClick={props.handleRandomBreed}>Random Breed</button>
    </div>
  )
}

export default BreedBox;
