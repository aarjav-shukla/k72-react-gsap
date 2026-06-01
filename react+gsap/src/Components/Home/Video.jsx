import React from 'react'
const video = "/local/69496b2d.mp4";
const Video = () => {
 
  return (
    <div className="h-full w-full">
      <video
        className="h-full w-full object-cover "
        loop
        muted
        autoPlay
        src={video}
      ></video>
    </div>
  );
}

export default Video
