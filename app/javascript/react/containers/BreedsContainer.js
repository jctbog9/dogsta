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
