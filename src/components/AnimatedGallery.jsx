import React, { useState, useEffect, useRef } from 'react';
import '../styles/components/animated-gallery.scss';

const AnimatedGallery = ({ children, animationTime = 1000, margin = 0, fullsize = true }) =>{
  const maxPosition = React.Children.count(children);
  const [resize, setResize] = useState(true);
  const gallery = useRef();
  const galleryContainer = useRef();
  let position = 0;
  let stepSize;

  const translatePosition = (atime = animationTime) => {
    gallery.current.animate({ "transform": `translateX(${-position*stepSize}px)` }, atime + 3);

    setTimeout(() => { 
      if(position >= maxPosition){
        position = 0;
        gallery.current.style.transform = `translateX(0px)`;
      }else{
        gallery.current.style.transform = `translateX(${-position*stepSize}px)`;
      }
    }, atime);
  }

  const setVariables = () => {
    if(fullsize){
    for (let index = 0; index < (maxPosition+1); index+=1) {
        gallery.current.children[index].style. width = `${galleryContainer.current.offsetWidth}px`;
      }
    }
    stepSize = gallery.current.children[0].offsetWidth + 2 * margin;
    console.log(position);
    translatePosition(10);
  }


  const moveLeft = () =>{
    position += 1;
    translatePosition();
  }

  useEffect(() => {
    const firstItem = gallery.current.children[0].cloneNode(true);
    gallery.current.appendChild(firstItem);
  })

  useEffect(() => {setVariables()}, [resize]);
  window.addEventListener('resize', () => {setResize(!resize)})

  return(
    <div className='agal-cont' ref={galleryContainer}>
      <div className='agal' ref={gallery}>
        {children}
      </div>
      <button type='button' onClick={moveLeft}>btn</button>
    </div>
  );
}

export default AnimatedGallery;