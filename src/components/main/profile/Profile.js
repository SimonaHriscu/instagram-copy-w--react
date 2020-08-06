import React from "react";
import Top from "./top/Top";
import Stories from "./stories/Stories";

const Profile = () => {
  return (
    <React.Fragment>
      <div className="top">
        <Top></Top>
      </div>
      <div className="stories">
        <Stories></Stories>
        <Stories></Stories>
        <Stories></Stories>
      </div>
    </React.Fragment>
  );
};

export default Profile;
