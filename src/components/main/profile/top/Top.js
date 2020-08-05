import React from "react";
import ProfilePhoto from "./img/profile-pic.png";

const Top = () => {
  return (
  <React.Fragment>
      <div className="Pic">
        <img src={ProfilePhoto} alt="profilePhoto"></img>
      </div>
      <div className="Info">
        <div>
          <p>kimkardashian</p>
          <p>kimkardashian</p>
          <p>kimkardashian</p>
          <p>kimkardashian</p>
        </div>
      </div>
</React.Fragment>
  );
};

export default Top;
