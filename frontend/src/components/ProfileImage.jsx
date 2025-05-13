import React from 'react';
import ProfileImg from './ProfileImg.jpg';


const ProfileImage = ({ alt = "Profile", width = "150px", height = "150px" }) => {
  return (
    <img
        src={ProfileImg}
        alt={alt}
        style={{
            width: width,
            height: height,
            borderRadius: '50%',
            marginTop: '60px',
            marginLeft: '600px',
        }}
    />
  );
}

export default ProfileImage;