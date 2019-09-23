import React from "react";

const Detail = props => {
  console.log(props);
  return (
    <div>
      <p>Name: {props.data.name}</p>
      <p>Email: {props.data.email}</p>
    </div>
  );
};

export default Detail;
