import React from "react";
import "../VideoPlayer/VideoItem.scss";

export default function VideoDetail({ video }) {
  if (!video) {
    return (
      <div className="video__no-video-wrapper">
        <div className="video__no-video" />
      </div>
    );
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  console.log(typeof video);
  return (
    <div>
      <div className="video__player">
        <iframe
          className="video__player-embed"
          src={videoSrc}
          allowFullScreen
          title="Video player"
        />
      </div>
      <div className="video__player-title-wrapper">
        <h4 className="video__player-title">{video.snippet.title}</h4>
      </div>
    </div>
  );
}
