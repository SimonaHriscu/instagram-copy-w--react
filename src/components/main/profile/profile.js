import React from 'react';
import '../../../scss/main.scss';
import Top from '../profile/Top/top'
import Stories from '../profile/Stories/stories'

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