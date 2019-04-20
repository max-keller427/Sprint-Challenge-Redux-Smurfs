import React from "react";
import { connect } from "react-redux";

class SmurfFrom extends React.Component {
  state = {
    name: "",
    age: "",
    height: "",
    id: ""
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addSmurf = e => {
    e.preventDefault();
    this.props.addSmurf(this.state);
  };

  render() {
    console.log(this.props);
    return (
      <form onSubmit={this.addSmurf}>
        <input
          onChange={this.handleInputChange}
          placeholder="Smurf Name"
          value={this.state.name}
          name="name"
        />
        <input
          onChange={this.handleInputChange}
          placeholder="Smurf Height"
          value={this.state.height}
          name="height"
        />
        <input
          onChange={this.handleInputChange}
          placeholder="Smurf Age"
          value={this.state.age}
          name="age"
        />
        <button>Submit Smurf</button>
      </form>
    );
  }
}

export default SmurfFrom;
