import React from "react";

const Gallery = (props) => {
  console.log(props.galleryInfo);

  const infoData = props.galleryInfo.map((item) => {
    const { id, name, url } = item; //destructuring
    return <img src={url} key={id} alt={name} />;
  });
  console.log(infoData);
  return (
    <div className="gallery-container">
      <div className="menu">
        <p>
          <ion-icon name="grid-outline"></ion-icon> POSTS
        </p>
        <p>
          <ion-icon name="tv-outline"></ion-icon> IGTV
        </p>
        <p>
          <ion-icon name="pricetag-outline"></ion-icon> TAGGED
        </p>
      </div>
      <div className="pic-gallery">
        {infoData}
        {infoData}
      </div>
    </div>
  );
};

export default Gallery;
