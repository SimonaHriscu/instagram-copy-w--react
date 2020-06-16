import React from 'react';
import '../../../scss/main.scss';
import Data from '../../../data.json'


const fileData = Data.map((obj) => {
  const { id, name, address } = obj; //destructuring
  return (
    <h4 key={id}>
      Hi, I am <img src={address} alt={name} /> and my name is {name}
    </h4>
  );
});

const Gallery = () => {
    return ( "These are boxes" );
}
 
export default Gallery;