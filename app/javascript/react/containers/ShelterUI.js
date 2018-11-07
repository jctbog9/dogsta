import React, { Component } from 'react';

import DogTile from '../components/DogTile';
import BreedTile from '../components/BreedTile';

import DogFormContainer from './DogFormContainer';

class ShelterUI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shelter: {
        id: 0,
        name: '',
        description: '',
        address: '',
        dogs: []
      },
      breeds: {}
    };
    this.deleteDog = this.deleteDog.bind(this)
    this.fetchBreeds = this.fetchBreeds.bind(this)
    this.hideBreeds = this.hideBreeds.bind(this)
  }

  componentDidMount() {
    fetch(`/api/v1/current_shelter`)
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
        this.setState({ shelter: body });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  deleteDog(dogId) {
    fetch(`/api/v1/dogs/${dogId}`, {
      method: 'DELETE',
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
        let oldDogs = this.state.shelter.dogs
        let newDogs = oldDogs.filter(dog => {
          return dog.id !== dogId
        })
        this.setState({ shelter: { dogs: newDogs}})
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  fetchBreeds() {
    fetch(`/api/v1/breeds`)
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
        this.setState({ breeds: body })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  hideBreeds() {
    this.setState({ breeds: {} })
  }

  render() {
    let dogs;
    if (this.state.shelter.dogs) {
      dogs = this.state.shelter.dogs.map(dog => {

        let deleteHandler = () => {
          this.deleteDog(dog.id)
        }

        return (
          <div className="dog-box">
            <DogTile
              key={dog.id}
              id={dog.id}
              name={dog.name}
              shelter={window.currentUser.shelter_id}
              delete={deleteHandler}
            />
          </div>
        )
      })
    }

    let breeds;
    let button;
    if (this.state.breeds[0]) {

      button = <button onClick={this.hideBreeds}>Hide</button>

      breeds = this.state.breeds.map(breed => {

        return (
          <div>
            <BreedTile
              key={breed.id}
              id={breed.id}
              name={breed.name}
            />
          </div>
        )
      })
    } else {
      button = <button onClick={this.fetchBreeds}>See Breeds</button>
    }

    return(
      <div className="content-wrapper">
        <div className="info-holder">
          <div className="header">
            <h2>{this.state.shelter.name}</h2>
          </div>
          <div className="description">
            <p>{this.state.shelter.description}</p>
            <p>{this.state.shelter.address}</p>
          </div>
        </div>
        <ul>
          {dogs}
        </ul>
        <div className="center">
          {button}
        </div>
        {breeds}
      </div>
    );
  }
};

export default ShelterUI;
