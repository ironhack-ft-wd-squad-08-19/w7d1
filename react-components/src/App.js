import React from "react";
import Profile from "./Profile";

const App = () => {
  const user = {
    name: "Antonio",
    email: "antonio@ironhack.com",
    pictureUrl:
      "https://cdn.newsapi.com.au/image/v1/5e35bbd52bf6dec969f49b4837901843"
  };

  return <Profile data={user} />;
};

export default App;
