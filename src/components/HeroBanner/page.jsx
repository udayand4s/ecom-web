'use client'
import React, { useEffect, useRef } from 'react';
import Link from "next/link";

const HeroBanner = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.controls = false;
      videoRef.current.play();
    }
  }, [videoRef]);

  return (
    <Link href='/home' className="cursor-pointer relative text-white text-[20px] w-full h-screen">
      <video
        id="Nike1998"
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        ref={videoRef}
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Link>
  );
};

export default HeroBanner;
