import React from "react";
import video from "../assets/media/video.mp4";
export default function About() {
  return (
    <div className="">
      {/* changing height video is getting cropped */}
      <video
        className="w-full h-[580px] rounded-[33px] object-cover"
        autoPlay
        muted
        loop
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
