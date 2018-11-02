import React, { Component } from 'react';

class BreedShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dog: {}
    };
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
        this.setState({ dog: body});
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    return(
      <div className="content-wrapper">
        <p>{this.state.dog.name}</p>
        <img src={this.state.dog.img_url}/>
        <p>{this.state.dog.description}</p>
      </div>
    );
  }
};

export default BreedShowContainer;
