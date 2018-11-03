import React, { Component } from 'react';

import DogFormContainer from './DogFormContainer';

class BreedShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breed: {},
      dogs: []
    };
    this.addNewDog = this.addNewDog.bind(this)
  }

  componentDidMount() {
    fetch(`/api/v1/breeds/${this.props.params.id}`)
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
              error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(body => {
        this.setState({ breed: body, dogs: body.dogs });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  addNewDog(formPayload){
    fetch(`/api/v1/dogs`, {
      method: 'POST',
      body: JSON.stringify(formPayload),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin'
    })
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
              error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(body => {
        let allDogs = this.state.dogs
        this.setState({ dogs: allDogs.concat(body.dog)})
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    let form;
    if (window.currentUser.role === "shelter"){
      form =
      <DogFormContainer
        handleSubmit={this.addNewDog}
        breedId={this.props.params.id}
      />
    }

    let dogs = this.state.dogs.map(dog => {
      return <li key={dog.id}>{dog.name}</li>
    })

    let available;
    if (dogs.length > 0) {
      available = <h3>Available for adoption:</h3>
    } else {
      available = <h3>There are no dogs of this breed currently available for adoption</h3>
    }

    return(
      <div className="content-wrapper">
        <h2>{this.state.breed.name}</h2>
        <img src={this.state.breed.img_url}/>
        <p>{this.state.breed.description}</p>
        {available}
        {dogs}
        {form}
      </div>
    );
  }
};

export default BreedShowContainer;
