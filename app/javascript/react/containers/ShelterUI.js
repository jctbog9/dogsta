import React, { Component } from 'react';

import BreedBox from '../components/BreedBox';

class IndexContainer extends Component {
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
    fetch(`/api/v1/shelter`)
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
    if (this.state.shelter.id !== 0) {
      dogs = this.state.shelter.dogs.map(dog => {
        return <li key={dog.id}>{dog.name}</li>
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

export default IndexContainer;
