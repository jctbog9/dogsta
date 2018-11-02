import React, { Component } from 'react';

import BreedBox from '../components/BreedBox';

import MemberUI from './MemberUI';
import ShelterUI from './ShelterUI';

class IndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breeds: [],
      breedShow: {},
      user: {},
    };
    this.randomBreed = this.randomBreed.bind(this)
  }

  componentDidMount() {
    fetch(`/api/v1/current_user`)
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
        this.setState({ user: body});
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
    let renderedUI;
    if (this.state.user.role === "member"){
      renderedUI =
        <MemberUI

        />
    } else if (this.state.user.role === "shelter") {
      renderedUI =
        <ShelterUI
        />
    } else {
      renderedUI =
        <p>"This is what happens right now when nobody signs in page!!!"</p>
    }

    return(
      <div>
        {renderedUI}
      </div>
    );
  }
};

export default IndexContainer;
