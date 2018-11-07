import React, { Component } from 'react';

import DogBox from '../components/DogBox';
import ShelterBox from '../components/ShelterBox';

class DogShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dog: []
    };
  }

  componentDidMount() {
    fetch(`/api/v1/dogs/${this.props.params.id}`)
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
        this.setState({ dog: body });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    let content;
    if (this.state.dog.name !== undefined) {
      content =
        <div className="info-holder">
          <DogBox
            key={this.state.dog.id}
            id={this.state.dog.id}
            name={this.state.dog.name}
            story={this.state.dog.story}
            age={this.state.dog.age}
          />
          <div className="description">
            <ShelterBox
              id={this.state.dog.shelter.id}
              name={this.state.dog.shelter.name}
              dog={this.state.dog}
            />
          </div>
        </div>
    } else {
      <p>Loading please wait...</p>
    }

    return(
      <div className="content-wrapper">
        {content}
      </div>
    );
  }
};

export default DogShowContainer;
