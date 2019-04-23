import React, { Component } from "react";
import "./App.css";
// import styled from "styled-components";
import { connect } from "react-redux";

import Smurf from "./Smurf";
import SmurfForm from "./SmurfFrom";
import { smurfActions, addSmurf } from "../actions";

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

// const flexDiv = styled.div`
//   display: flex;
// `;
class App extends Component {
  componentDidMount() {
    this.props.smurfActions();
  }

  render() {
    return (
      <div className="app">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        {this.props.smurfs.map(smurf => {
          return (
            <Smurf
              name={smurf.name}
              id={smurf.id}
              age={smurf.age}
              height={smurf.height}
            />
          );
        })}
        <SmurfForm addSmurf={this.props.addSmurf} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state);
  return {
    smurfs: state.smurfs
  };
};

export default connect(
  mapStateToProps,
  { smurfActions, addSmurf }
)(App);
