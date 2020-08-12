import React, {Component} from 'react';
import './myProfile.less';

class MyProfile extends Component {
  state = {
    name: '',
    gender: 'Male',
    description: '',
    isChecked: false
  }

  handleNameChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleGenderChange = event => {
    this.setState({
      gender: event.target.value
    })
  }

  handleDescriptionChange = event => {
    this.setState({
      description: event.target.value
    })
  }

  handleCheckChange = event => {
    this.setState({
      isChecked: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.name, this.state.gender, this.state.description, this.state.isChecked)
  }

  render() {
    return (
      <form className='my-profile' onSubmit={this.handleSubmit}>
        <h1>My Profile</h1>
        <div>
          <label>Name<br />
            <input 
              type='text' 
              id='name' 
              placeholder='Your name' 
              value={this.state.name} 
              onChange={this.handleNameChange} />
          </label>
        </div>
        
        <div>
          <label>Gender<br />
            <select 
              id='gender' 
              value={this.state.gender} 
              onChange={this.handleGenderChange}>
                <option>Male</option>
                <option>Female</option>
            </select>
          </label>
        </div>

        <div>
          <label>Description<br />
            <textarea 
              id='description' 
              value={this.state.description}
              placeholder='Description about yourself' 
              onChange={this.handleDescriptionChange}>
            </textarea>
          </label>
        </div>

        <div>
          <label id="checkbox">
            <input 
              type='checkbox' 
              id='checkbox' 
              checked={this.state.isChecked} 
              onChange={this.handleCheckChange} />I have read the terms of conduct
          </label>
        </div>
        
        <button 
          className='btn btn-primary' 
          type='submit'
          disabled={!this.state.name || !this.state.description || !this.state.isChecked}>
          Submit
        </button>
      </form>
    );
  }
}

export default MyProfile;
