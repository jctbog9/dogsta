import React, { Component } from 'react';

import BreedBox from '../components/BreedBox';

class IndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breeds: [],
      breedShow: {},
      user: {},
      background: 'user'
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
        this.setState({ user: body, backrgound: body.role });
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
        <BreedBox
          handleRandomBreed={this.randomBreed}
          key={this.state.breedShow.id}
          id={this.state.breedShow.id}
          breedName={this.state.breedShow.name}
          description={this.state.breedShow.description}
          photo={this.state.breedShow.img_url}
        />
    } else if (this.state.user.role === "shelter") {
      renderedUI =
      <div className="content-wrapper">
        <br />
        <br />
        <br />
        <br />
        <p>"Hello from the admin page!!!"</p>
      </div>
    } else {
      renderedUI =
      <div>
        <br />
        <br />
        <br />
        <br />
        <p>"This is what happens right now when nobody signs in page!!!"</p>
      </div>
    }

    return(
      <div>
        {renderedUI}
      </div>
    );
  }
};

export default IndexContainer;
