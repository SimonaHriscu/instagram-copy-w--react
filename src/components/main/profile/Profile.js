import React from 'react';
import Top from './top/Top'
import Stories from './stories/Stories'

const Profile = () => {
    return ( <div>
    <div className="Top">
      {" "}
      <Top></Top>
    </div>
    <div className="Stories">
        <Stories></Stories>
        <Stories></Stories>
        <Stories></Stories>
        

    </div>
    </div>);
}
 
export default Profile;