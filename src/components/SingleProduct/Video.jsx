import React from 'react';
import Iframe from '../Iframe/App';
import Styles from './video.module.scss'

const Video = ({ title, vid }) => {

  return (
    <div className={Styles.video_container}>
      <div className={Styles.video}>
        <div className={Styles.video_to_play}>
          <div className={Styles.player} id="player">
            <Iframe src={`https://www.youtube.com/embed/${vid}`} title={title} className={Styles.youtube_video} isYoutube />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;