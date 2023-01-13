import React from "react";
import VideoItem from "./VideoItem";
import "../VideoPlayer/VideoItem.scss";

export default function VideoList({ videos, handleVideoSelect }) {
  const renderedVideos = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        handleVideoSelect={handleVideoSelect}
      />
    );
  });

  return <div className="video">{renderedVideos}</div>;
}