import React, { Component } from 'react';

export default class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       firstName: '',
       lastName:'',
       skills:''
    }
  }
  firstNameHandler(e){
    console.log(e.target.value);
    this.setState({
      firstName: e.target.value,
    })
  }
  lastNameHandler(e){
    this.setState({
      lastName: e.target.value,
    })
  }
  skillHandler(e){
    this.setState({
      skills: e.target.value,
    })
  }
  submitHandler(e){
    e.preventDefault()
    alert(`First Name: ${this.state.firstName} Last Name: ${this.state.lastName} Skill: ${this.state.skills}`)
  }
  render() {
    return (
      <div>
        <form onSubmit={(e)=> this.submitHandler(e)}>
          <div>
            <label htmlFor="first-name">First Name: </label>
            <input type="text" id="first-name" required placeholder="First Name" value={this.state.firstName} onChange={(e)=> this.firstNameHandler(e)}  />
            <br />
            <label htmlFor="last-name">Last Name: </label>
            <input type="text" id='last-name'required placeholder='Last Name' value={this.state.lastName} onChange={(e)=> this.lastNameHandler(e)} />
          </div>
          <div>
            <select onChange={(e)=> this.skillHandler(e)} value={this.state.skills}>
              <option value="">Select your skill</option>
              <option value="React">React</option>
              <option value="vue">Vue</option>
              <option value="angular">Angular</option>
              <option value="python">Python</option>
            </select>
          </div>
          <div>
            <button type='submit'>Submit</button>
          </div>
        </form>
      </div>
    )
  }
}
