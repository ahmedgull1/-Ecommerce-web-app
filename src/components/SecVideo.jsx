import React from 'react';

function SecVideo() {
  return (
    <div className='text-center  py-16'>
      <video className='w-full' loop muted autoplay="autoplay">
        <source src="./images/video-placeholder.mp4" type="video/mp4" />
      </video>

    </div>
  );
}

export default SecVideo;