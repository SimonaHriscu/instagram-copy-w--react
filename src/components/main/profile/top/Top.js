import React from 'react';
import '../../../../scss/main.scss';
import ProfilePhoto from './img/profile-pic.png';

const Top = () => {
    return ( <div className="top-container">
        <div className="Pic"><img src = {ProfilePhoto} alt ="profilePhoto"></img>
        </div>
        <div className="Info">THIS Is info</div>
        
        
        </div> );
}
 
export default Top;