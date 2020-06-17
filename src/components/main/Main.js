import React from "react";
import Gallery from "./gallery/Gallery";
import Profile from "./profile/Profile";

const Main = (props) => {
  //console.log(props);
  return (<div className = "content">
    <div className="Profile">
      {" "}
      <Profile></Profile>
    </div>
    <div className="Gallery">
        <Gallery galleryInfo = {props.gallery}></Gallery>

    </div>
    </div>
  );
};

export default Main;
