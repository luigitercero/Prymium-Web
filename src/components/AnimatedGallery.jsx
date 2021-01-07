import React, { useState, useEffect, useRef } from 'react';
import useOnScreen from '../hooks/useOnScreen';

import '../styles/components/animated-gallery.scss';


const AnimatedGallery = ({ children, baseName, transitionTime = 3800, animationTime = 1000 }) =>{
  const maxPosition = React.Children.count(children);
  const gallery = useRef();
  const galleryContainer = useRef();
  const checkMark = useRef();
  const isVisible = useOnScreen(checkMark);
  const [interval, setMovementInterval] = useState(undefined);
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


  const setVariables = () => {
    for (let index = 0; index < (maxPosition+1); index+=1) {
      gallery.current.children[index].style.width = `${galleryContainer.current.offsetWidth}px`;
    }
    translatePosition(10);
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
    setMovementInterval(setInterval(moveLeft, transitionTime))
  }

  const stopMovement = () => {
    setMovementInterval(clearInterval(interval))
  }

  useEffect(() => {
    
    if(isVisible){
      startMovement();  
    }else{
      stopMovement();
    }
  }, [isVisible])

  useEffect(() => {
    const firstItem = gallery.current.children[0].cloneNode(true);
    gallery.current.appendChild(firstItem);
    setVariables();
  },[])

  window.addEventListener('resize', () => {setTimeout(setVariables, 20)})

  return(
    <div className='agal-cont' ref={galleryContainer}>
      <div ref={checkMark} />
      <div className={`agal ${baseName}-0`} ref={gallery}>
        {children}
      </div>
    </div>
  );
}

export default AnimatedGallery;