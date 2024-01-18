import React, { useRef, useState, useEffect } from 'react';
import useOnScreen from '@hooks/useOnScreen';
import styles from './styles.module.scss';

const Iframe = ({ src, title, className, isYoutube = false, opts = "" }) => {
  const [url, setUrl] = useState('about:blank');
  const [isLoading, setLoading] = useState(true);
  const videoFrame = useRef();
  const isVisible = useOnScreen(videoFrame);
  const allowOpts = isYoutube ? "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" : opts;
  const hideLoad = () => {
    setLoading(false);
  }

  useEffect(() =>{
    if (isVisible) {
      setUrl(src);
      videoFrame.current.animate([{"opacity": "0"},{"opacity": "1"}], 1000)
    }
  },[isVisible])

  return(
    <>
      <iframe onLoad={hideLoad} title={title} ref={videoFrame} className={className} src={url} allow={allowOpts} frameBorder="0" allowFullScreen="" />
      {isLoading && (isVisible && (
        <div className={styles.loadingio_spinner_rolling_guaoirypm7}>
          <div className={styles.ldio_gorbfxh5l89}>
            <div />
          </div>
        </div>
        )
      )}
    </>
  )
}

export default Iframe;