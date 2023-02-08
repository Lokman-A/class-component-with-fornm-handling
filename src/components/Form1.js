import React, { Component } from 'react';

class Form1 extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       firstName: "",
       lastName: "",
       skill: "",
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
  skillHandler(e){
    this.setState({
      skill: e.target.value,
    })
  }
  formHandler(e){
    e.preventDefault()
    alert(`First Name: ${this.state.firstName}, Last Name: ${this.state.lastName}, Skill: ${this.state.skill}`)
  }
  render() {
    return (
      <div>
        <form onSubmit={(e)=> this.formHandler(e)}>
          <div>
            <label htmlFor="fist-name">First Name: </label>
            <input type="text" onChange={(e)=>this.firstNameHandler(e)} value={this.state.firstName} />
            <br />
            <label htmlFor='last-name'>Last Name: </label>
            <input type="text" onChange={(e)=> this.lastNameHandler(e) }value={this.state.lastName}/>
          </div>
          <div>
            <select onChange={(e)=> this.skillHandler(e) } value={this.state.skill}>
              <option value="">Select your option</option>
              <option value="react">React</option>
              <option value="anguler">Angular</option>
              <option value="vue">Vue</option>
            </select>
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form1;