import React, { useRef, useState, useEffect } from 'react';
import useOnScreen from '../../hooks/useOnScreen';

const Iframe = ({ src, title, className, isYoutube = false, opts = "" }) => {
  const [url, setUrl] = useState('about:blank');
  const videoFrame = useRef();
  const isVisible = useOnScreen(videoFrame);
  const allowOpts = isYoutube ? "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" : opts;

  useEffect(() =>{
    if (isVisible) {
      setUrl(src);
      videoFrame.current.animate([{"opacity": "0"},{"opacity": "1"}], 2000)
    }
  },[isVisible])

  return(
    <iframe title={title} ref={videoFrame} className={className} src={url} allow={allowOpts} frameBorder="0" allowFullScreen="" />
  )
}

export default Iframe;