import React from 'react';
import '../../../../scss/main.scss';
import StoryCircle from './img/stories.png';


const Stories = () => {
    return ( 
    <div className="story-circles"><img src = {StoryCircle} alt ="story"></img>
    </div> 
    )
}
 
export default Stories;