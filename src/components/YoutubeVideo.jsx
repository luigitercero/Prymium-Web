import React from 'react';
import Iframe from './Iframe/App';
import { SubTitle } from './Title';

const YoutubeVideo = ({ title, vid }) => {

  return (
    <div className="video-container">
      <SubTitle>{title}</SubTitle>
      <div className="video">
        <div className="video-to-play">
          <div className="player" id="player">
            <Iframe src={`https://www.youtube.com/embed/${vid}`} title={title} className="youtube-video" isYoutube />
          </div>
        </div>
      </div>
    </div>
    
    
  );
};

export default YoutubeVideo;