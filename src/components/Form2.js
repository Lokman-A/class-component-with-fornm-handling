import React, { Component } from 'react';

class Form2 extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       firstName:'',
       lastName:'',
       skills:''
    }
  }
  firstNameHandler(e){
    this.setState({
      firstName: e.target.value,
    })
  }
  lastNameHandler(e){
    this.setState({
      lastName: e.target.value,
    })
  }
  skillsHandler(e){
    this.setState({
      skills: e.target.value,
    })
  }
  formHandler(e){
    e.preventDefault();
    console.log(e.target)
  }
  render() {
    return (
      <div>
        <form onSubmit={(e)=> this.formHandler(e)}>
          <div>
            <label htmlFor="first-name">First Name: </label>
            <input type="text" id='first-name'  value={this.state.firstName} required onChange={(e)=> this.firstNameHandler(e)} />
            <br />
            <label htmlFor="last-name">Last Name: </label>
            <input type="text"id='last-name' value={this.state.lastName} required onChange={(e)=> this.lastNameHandler(e)} />
          </div>
          <div>
          <select value={this.state.skills} onChange={(e)=> this.skillsHandler(e)}>
            <option value="">Select your option</option>
            <option value="react">React</option>
            <option value="vue">Vue</option>
            <option value="angular">Angular</option>
          </select>
          </div>
          <button type='submit'>submit</button>
        </form>
      </div>
    );
  }
}

export default Form2;