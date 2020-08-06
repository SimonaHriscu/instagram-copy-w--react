import React from "react";
import ProfilePhoto from "./img/profile-pic.png";

const Top = () => {
  return (
  <React.Fragment>
      <div className="pic">
        <img src={ProfilePhoto} alt="profilePhoto"></img>
      </div>
      <div className="info">
        <div className="title">
          <p>platsForEveryone</p>
          <p>✔</p>
          <button>Follow</button>
          <p>...</p>
        </div>
        <div className="views">
          <p><span>5,226</span> posts</p>
          <p><span>183m</span> followers</p>
          <p><span>57</span> following</p>
        </div>
        <div className="description">
          <p><span>Plant Shop</span></p>
          <p>Shop @SKIMS Stretch Rib in Rose Clay now & @kkwbeauty Skin Perfecting Setting Powder, Powder Body Brush, Loofah & travel sizes body makeup on 08.14</p>
          <p><span>plantshop.com</span></p>
        </div>
        <div className="followers">
          <p><span>Followed by</span> alina, melvinaa, raluca <span> +61 more</span></p>
        </div>
      </div>
</React.Fragment>
  );
};

export default Top;
