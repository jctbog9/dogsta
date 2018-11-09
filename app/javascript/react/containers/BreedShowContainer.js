import React, { Component } from 'react';

import DogFormContainer from './DogFormContainer';

import DogTile from '../components/DogTile';

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
        let oldDogs = this.state.dogs
        let newDogs = oldDogs.filter(dog => {
          return dog.id !== dogId
        })
        this.setState({ dogs: newDogs})
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    let form;
    if (window.currentUser.role === "shelter"){
      form =
      <div className="breed-box">
        <DogFormContainer
          handleSubmit={this.addNewDog}
          breedId={this.props.params.id}
        />
      </div>
    }

    let dogs = this.state.dogs.map(dog => {

      let deleteHandler = () => {
        this.deleteDog(dog.id)
      }

      return (
        <div className="dog-box">
          <DogTile
            key={dog.id}
            id={dog.id}
            shelter={dog.shelter_id}
            name={dog.name}
            story={dog.story}
            age={dog.age}
            delete={deleteHandler}
          />
        </div>
      )
    })

    let available;
    if (dogs.length > 0) {
      available = <div className="availability">Available for adoption</div>
    } else {
      available = <div className="availability">There are no dogs of this breed currently available for adoption</div>
    }

    return(
      <div className="content-wrapper">
        <div className="header">
          <h2>{this.state.breed.name}</h2>
        </div>
        <div className="info-holder">
          <img src={this.state.breed.img_url}/>
          <div className="description">
            <p>{this.state.breed.description}</p>
          </div>
          <div className="all-dogs">
            {available}
            {dogs}
          </div>
        </div>
          {form}
      </div>
    );
  }
};

export default BreedShowContainer;
