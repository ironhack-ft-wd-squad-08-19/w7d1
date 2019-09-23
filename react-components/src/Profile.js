import React from "react";
import Picture from "./Picture";
import Detail from "./Detail";

const Profile = props => {
  return (
    <React.Fragment>
      <h1>Profile</h1>
      <Picture imageUrl={props.data.pictureUrl} />
      <Detail data={props.data} />
    </React.Fragment>
  );
};

export default Profile;
