import React from "react";
import { connect } from "react-redux";

class SmurfFrom extends React.Component {
  state = {
    name: "",
    age: "",
    height: ""
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addSmurf = e => {
    e.preventDefault();
    this.props.smurfActions(this.state.addSmurf);
  };

  render() {
    return (
      <form>
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
        <button onSubmit={this.addSmurf}>Submit Smurf</button>
      </form>
    );
  }
}

export default SmurfFrom;
