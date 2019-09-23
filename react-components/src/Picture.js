import React from "react";

const Picture = props => {
  return (
    <div>
      <img src={props.imageUrl} width="200px" />
    </div>
  );
};

export default Picture;
