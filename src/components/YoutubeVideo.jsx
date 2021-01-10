import React from 'react';
import { SubTitle } from './Title';

const YoutubeVideo = ({ title, vid }) => {
  return (
    <div className="video-container" loading="lazy">
      <SubTitle>{title}</SubTitle>
      <div className="video">
        <div className="video-to-play">
          <div className="player" id="player">
            <iframe title={title} className="youtube-video" src={`https://www.youtube.com/embed/${vid}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" frameBorder="0" allowFullScreen="" />
          </div>
        </div>
      </div>
    </div>
    
    
  );
};

export default YoutubeVideo;