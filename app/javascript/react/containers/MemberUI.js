import React, { Component } from 'react';

import BreedBox from '../components/BreedBox';

class IndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breedShow: {}
    };
    this.randomBreed = this.randomBreed.bind(this)
  }

  componentDidMount(){
    fetch(`/api/v1/random_breed`)
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
        this.setState({ breedShow: body });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  randomBreed() {
    fetch(`/api/v1/random_breed`)
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
        this.setState({ breedShow: body });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    return(
      <div>
        <BreedBox
          handleRandomBreed={this.randomBreed}
          id={this.state.breedShow.id}
          breedName={this.state.breedShow.name}
          imageUrl={this.state.breedShow.image_url}
        />
      </div>
    );
  }
};

export default IndexContainer;
