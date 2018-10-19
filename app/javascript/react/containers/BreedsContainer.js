import React, { Component } from 'react';

import BreedBox from '../components/BreedBox';

class BreedsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breeds: []
    };
  }

  componentDidMount() {
    // the fetch will go here and get the dog info from an API endpoint yet to be defined
  }

  render() {

    return(
      <div>
        <p>"Breeds Container (All Breeds)"</p>
        <BreedBox />
      </div>
    );
  }
};

export default BreedsContainer;
