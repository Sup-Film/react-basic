import { useState, useRef, useEffect } from 'react';

function VideoPlayer({ src, isPlaying }) {
  // useRef ใช้เพื่อเก็บตัวแปร reference เอาไว้เพื่อใช้สำหรับการเปลี่ยนแปลง
  const ref = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  })

  return <video ref={ref} src={src} loop playsInline />;
}

export default VideoPlayer;