import React from 'react';

const BreedBox = props => {
  return(
    <div className="breed-box">
      <div className="breed-box-content">
        <h2>{props.breedName}</h2>
        <p>{props.description}</p>
      </div>
      <img src={props.photo}/><br/>
      <button onClick={props.handleRandomBreed}>Random Breed</button>
    </div>
  )
}

export default BreedBox;
