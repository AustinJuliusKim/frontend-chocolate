import React from 'react';

import './Main.css';

const Profile = (props) => {
  return (
    <div className="Main-profile">
      <div className="item item-1">
        <img src="https://fillmurray.com/300/300" className="img" alt="Gentlemanly  Bill Murray"/>
      </div>
      <div className="item item-2">
        <h1 className="hdr-1">
          Fill Murray at your service
        </h1>
        <h2 className="hdr-2">
          Notable Actor, Comedian and Zombie
        </h2>
      </div>
      <div className="item item-3">
        <p className="text">Activated charcoal ugh hashtag photo booth. YOLO vinyl knausgaard put a bird on it, semiotics viral mixtape tumeric kickstarter. Offal listicle lomo put a bird on it, copper mug truffaut selfies pour-over pinterest try-hard coloring book photo booth helvetica affogato. Asymmetrical cloud bread crucifix small batch lyft pork belly. Gentrify PBR&B XOXO, cloud bread knausgaard deep v blue bottle. Cardigan tumblr gochujang pabst farm-to-table DIY. Blog af YOLO, retro bespoke small batch sustainable.</p>
      </div>
    </div>
  )
};

export default Profile;
