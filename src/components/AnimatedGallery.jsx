/* eslint-disable no-console */
import React, { useState, useEffect, useRef } from 'react';
import useOnScreen from '../hooks/useOnScreen';

const AnimatedGallery = ({ children, baseName, transitionTime = 5000, animationTime = 1000 }) =>{
  const maxPosition = React.Children.count(children);
  const gallery = useRef();
  const galleryContainer = useRef();
  const checkMark = useRef();
  const isVisible = useOnScreen(checkMark);
  const [intervalId, setIntervalId] = useState(undefined);
  let position = 0;

  const translatePosition = (atime = animationTime) => {
    gallery.current.classList.remove(`${baseName}-${position - 1}`);
    gallery.current.style.transitionDuration = `${atime}ms`;
    gallery.current.classList.add(`${baseName}-${position}`);
    if(position >= maxPosition){
      setTimeout(() =>{
        gallery.current.classList.remove(`${baseName}-${maxPosition}`);
        gallery.current.style.transitionDuration = `unset`;
        gallery.current.classList.add(`${baseName}-0`);;
      }, animationTime * 1.5)
    }
  }

  const moveLeft = () =>{
    for (let index = 0; index < maxPosition; index+=1) {
      if(gallery.current.classList.contains(`${baseName}-${index}`)){
        position = index + 1;
      }
    }
    translatePosition();
  }

  const startMovement = () => {
    const interval = setInterval(moveLeft, transitionTime);
    setIntervalId(interval);
  }

  const stopMovement = () => {
    clearInterval(intervalId);
  }

  useEffect(() => {
    
    if(isVisible){
      startMovement();
    }else{
      stopMovement();
    }

  }, [isVisible])

  useEffect(() => {
    try {
      const firstItem = gallery.current.children[0].cloneNode(true);
      gallery.current.appendChild(firstItem);
      gallery.current.style.width = `${(maxPosition + 1)*100}%`;
    } catch (err) {
      //console.log(err);
    }
  }, [])

  return(
    <div className='agal-cont' ref={galleryContainer}>
      <span className='check' ref={checkMark}>a</span>
      <div className={`agal ${baseName}-0`} ref={gallery}>
        {children}
      </div>
    </div>
  );
}

export default AnimatedGallery;