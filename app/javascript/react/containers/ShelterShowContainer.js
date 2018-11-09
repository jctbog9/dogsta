import React, { Component } from 'react';

import DogTile from '../components/DogTile';
import BreedTile from '../components/BreedTile';
import ShelterShowDogBox from '../components/ShelterShowDogBox';

class ShelterShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shelter: {},
    };
  }

  componentDidMount() {
    fetch(`/api/v1/shelters/${this.props.params.id}`)
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

  render() {
    let dogs;
    if (this.state.shelter.dogs !== undefined) {
      dogs = this.state.shelter.dogs.map(dog => {
        return(
          <div className="dog-box">
            <ShelterShowDogBox
              key={dog.id}
              id={dog.id}
              name={dog.name}
              shelter={dog.shelter_id}
            />
          </div>
        )
      })
    } else {
      return <h2>There are currently no dogs available for adoption at this shelter</h2>
    }

    return(
      <div className="content-wrapper">
        <div className="info-holder">
          <div className="header">
            <p>{this.state.shelter.name}</p>
          </div>
          <div className="description">
            <p>{this.state.shelter.description}</p>
            <p>{this.state.shelter.address}</p>
          </div>
        </div>
        <div className="shelter-dogs">
          {dogs}
        </div>
      </div>
    );
  }
};

export default ShelterShowContainer;
