import React from "react";
import Gallery from "./gallery/Gallery";
import Profile from "./profile/Profile";

const Main = (props) => {
  //console.log(props);
  return (
  
  <div className = "content">
    <div className="profile">
      <Profile></Profile>
    </div>
    <div className="gallery">
        <Gallery galleryInfo = {props.gallery}></Gallery>

    </div>
    </div>
  );
};

export default Main;
