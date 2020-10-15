import React from 'react';


export default function VideoItem({video, handleVideoSelect}) {
    return (
        <div onClick={ () => handleVideoSelect(video)} className='video__item'>
            <img className='video__image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
            <div className='video__content'>
                <div className='video__title'>{video.snippet.title}</div>
            </div>
        </div>
    )
}
