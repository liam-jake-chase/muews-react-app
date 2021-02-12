import React from "react";
import { motion } from "framer-motion";

export default function VideoItem({ video, handleVideoSelect }) {
  return (
    <motion.button
      onClick={() => handleVideoSelect(video)}
      className="video__item"
      whileHover={{ scale: 1.03 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <img
        className="video__image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.description}
      />
      <div className="video__content">
        <div className="video__title">{video.snippet.title}</div>
      </div>
    </motion.button>
  );
}
