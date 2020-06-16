import React from 'react';
import '../../../scss/main.scss';
import Data from '../../../data.json'


const fileData = Data.map((obj) => {
  const { id, name, address } = obj; //destructuring
  return (
    <h4 key={id}>
       <img src={address} alt={name} /> 
    </h4>
  );
});

const Gallery = () => {
    return (<div className="gallery-container">
<div className="menu">
 <p><ion-icon name="grid-outline"></ion-icon> POSTS</p> 
 <p><ion-icon name="tv-outline"></ion-icon> IGTV</p> 
 <p><ion-icon name="pricetag-outline"></ion-icon> TAGGED</p> 
</div>
<div className="pic-gallery">
{fileData}
{fileData}
</div>


    </div> );
}
 
export default Gallery;