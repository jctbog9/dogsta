import React, { Component } from 'react';

import TextField from '../components/TextField';
import NumberField from '../components/NumberField';

class DogFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      story: '',
      age: 0
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleStoryChange = this.handleStoryChange.bind(this)
    this.handleAgeChange = this.handleAgeChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClearForm = this.handleClearForm.bind(this)
  }

  handleNameChange(event) {
    this.setState({name: event.target.value})
  }

  handleStoryChange(event) {
    this.setState({story: event.target.value})
  }

  handleAgeChange(event) {
    this.setState({age: event.target.value})
  }

  handleClearForm() {
    this.setState({
      name: '',
      story: '',
      age: 0
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    if (window.currentUser.role === "shelter" && this.state.name !== '' && this.state.story !== '' && this.state.age !== 0) {
      let formPayload = {
        name: this.state.name,
        story: this.state.story,
        age: this.state.age,
        breed_id: this.props.breedId,
        shelter_id: window.currentUser.shelter_id
      }
      this.props.handleSubmit(formPayload)
      this.handleClearForm()
    } else {
      alert('All fields must be filled out')
      this.handleClearForm()
    }
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <TextField
            label="Name"
            handleChange={this.handleNameChange}
            value={this.state.name}
          />
          <TextField
            label="Story"
            handleChange={this.handleStoryChange}
            value={this.state.story}
          />
          <NumberField
            label="Age"
            handleChange={this.handleAgeChange}
            value={this.state.age}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
};

export default DogFormContainer;
