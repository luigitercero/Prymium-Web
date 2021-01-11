import React, { useEffect, useRef } from 'react';
import { SubTitle } from './Title';


const GalleryItem = ({ element }) => {
  const { image, alt, name, description } = element
  return (
    <>
      <img src={image} alt={alt} />
      <div className="image-description">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </>
  );
}

const Gallery = ({ title, imageArray }) => {
  const error = 20;
  const gallery = useRef();
  const galleryContainer = useRef();
  const leftArrow = useRef();
  const rightArrow = useRef();
  let allowScroll = false;
  let position = 0;
  let currentScrollPosition = 0;
  let acumMovement = 0;
  let stepSize;
  let offset;
  let maxPosition;
  let width;
  let firstStep;
  let scrollRight = false;


  function calcFirstStep(){
    const allowedSpaces = parseInt(width / stepSize)
    const spaceLeft = width - allowedSpaces*stepSize
    return stepSize - parseInt(spaceLeft / 2) + (width*0.03) - 5
  }


  function displayArrowsControl(){
    if(position === 0){
      leftArrow.current.style.display = 'none';
    }else{
      leftArrow.current.style.display = 'inline-block';
    }

    if(position === maxPosition){
      rightArrow.current.style.display = 'none';
    }else{
      rightArrow.current.style.display = 'inline-block';
    }
  }

  function translatePosition(animationTime = 400){

    if(position === 0){
      acumMovement = 0;
    }else{
      acumMovement = firstStep + (position - 1)*stepSize;  
    }

    gallery.current.style.transitionDuration = `${animationTime}ms`;
    gallery.current.style.transform = `translateX(${-acumMovement + offset}px)`;

    displayArrowsControl();
  }

  function setVariables(){
    width = galleryContainer.current.offsetWidth;
    offset = parseInt(width / 2);
    console.log(offset);
    galleryContainer.current.scrollLeft = offset;

    if (window.matchMedia('(max-width: 1024px)').matches){
      stepSize = 280;
    }else{
      stepSize = 310;
    }
    maxPosition = imageArray.length - Math.floor(width / stepSize);
    firstStep = calcFirstStep();

    translatePosition(10);
  }

  function touchIn(){
    // gallery.current.style.willChange = 'transform';
    gallery.current.style.transitionDuration = `unset`;
    allowScroll = true;
  }

  function touchOut(){
    allowScroll = false;
    const movement = acumMovement - position * stepSize
    const stepsToMove = parseInt(movement / stepSize)
    if(movement >= error){
      position += stepsToMove;
      if(scrollRight){
        position+=1;
      }
    }else if(movement <= -error){
      position += stepsToMove;
      if(!scrollRight){
        position-=1;
      }
    }

    if(position < 0){
      position = 0;
    }

    if(position > maxPosition){
      position = maxPosition;
    }

    translatePosition();
  }

  function scrollControl() {
    if(allowScroll){
      currentScrollPosition = galleryContainer.current.scrollLeft;
      acumMovement += currentScrollPosition - offset;
      if((currentScrollPosition - offset) > 0){
        scrollRight = true;
      }else if((currentScrollPosition - offset) < 0){
        scrollRight = false;
      }

      gallery.current.style.transform = `translateX(${-acumMovement + offset}px)`;
      
    }
    galleryContainer.current.scrollLeft = offset;
  }

  function moveRight() {
    position += 1;
    translatePosition();
  }

  function moveLeft() {
    position -= 1;
    translatePosition();
  }

  useEffect(setVariables);
  useEffect(()=>{
    window.addEventListener('resize',() => {setTimeout(setVariables, 20)} )
  },[])
  
  return (
    <div className="image-gallery">
      <SubTitle>{title}</SubTitle>
      <div className="gallery-container" ref={galleryContainer} onScroll={scrollControl} onTouchEnd={touchOut} onTouchStart={touchIn}>
        <div className="gallery" ref={gallery}>
          {imageArray.map(element => {
            return (
              <div className="gallery-image" key={element.id}>
                <GalleryItem element={element} />
              </div>
            )
          })}
        </div>
      </div>
      <span aria-hidden="true" className="fas fa-angle-right arrow right-arrow" ref={rightArrow} onClick={moveRight} />
      <span aria-hidden="true" className="fas fa-angle-left arrow left-arrow" ref={leftArrow} onClick={moveLeft} />
    </div>
  );
};

export default Gallery;