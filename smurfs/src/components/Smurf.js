import React from "react";
// import styled from "styled-components";

// const ListDiv = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   color: white;
// `;
const Smurf = props => {
  return (
    <div>
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </div>
  );
};

// Smurf.defaultProps = {
//   name: "",
//   height: "",
//   age: ""
// };

export default Smurf;
