import React, { Component } from 'react';

import DogTile from '../components/DogTile';

class ShelterUI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shelter: {
        id: 0,
        name: '',
        description: '',
        dogs: ['']
      }
    };
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

  render() {
    let dogs;
    if (this.state.shelter) {
      dogs = this.state.shelter.dogs.map(dog => {
        return (
          <div>
            <DogTile
              key={dog.id}
              id={dog.id}
              name={dog.name}
            />
          </div>
        )
      })
    }

    return(
      <div className="content-wrapper">
        <p>{this.state.shelter.name}</p>
        <p>{this.state.shelter.description}</p>
        <ul>
          {dogs}
        </ul>
      </div>
    );
  }
};

export default ShelterUI;
