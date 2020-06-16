import React from "react";
import "../../scss/main.scss";
import Gallery from "./gallery/gallery";
import Profile from "./profile/profile";

const Main = () => {
  return (<div className = "content">
    <div className="Profile">
      {" "}
      <Profile></Profile>
    </div>
    <div className="Gallery">
        <Gallery></Gallery>

    </div>
    </div>
  );
};

export default Main;
