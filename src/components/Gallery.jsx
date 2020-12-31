import React, { useEffect } from 'react';
import { SubTitle } from './Title';
import '../styles/components/gallery.scss';


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

const Gallery = ({ id, title, imageArray }) => {
  const error = 20;
  let allowScroll = false;
  let position = 0;
  let initialScrollPosition = 0;
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
    return stepSize - parseInt(spaceLeft / 2) + 16
  }


  function displayArrowsControl(){
    const leftArrow = document.getElementById(`${id}-la`)
    const rightArrow = document.getElementById(`${id}-ra`)
    if(position === 0){
      leftArrow.style.display = 'none';
    }else{
      leftArrow.style.display = 'inline-block';
    }

    if(position === maxPosition){
      rightArrow.style.display = 'none';
    }else{
      rightArrow.style.display = 'inline-block';
    }
  }

  function translatePosition(animationTime = 300){
    const gallery = document.getElementById(id);

    if(position === 0){
      acumMovement = 0;
    }else{
      acumMovement = firstStep + (position - 1)*stepSize;  
    }
    gallery.animate({ "transform": `translateX(${-acumMovement + offset}px)` }, animationTime)
    setTimeout(() => { gallery.style.transform = `translateX(${-acumMovement + offset}px)`; }, animationTime)
    displayArrowsControl();
  }


  function setVariables(){
    const galleryContainer = document.getElementById(`${id}-container`);

    width = galleryContainer.offsetWidth
    offset = Math.floor(width / 2)
    galleryContainer.scrollLeft = offset

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
    allowScroll = true;
  }

  function touchOut(){
    allowScroll = false;
    const gallery = document.getElementById(id);
    const galleryContainer = document.getElementById(`${id}-container`);
    const movement = currentScrollPosition - offset
    const stepsToMove = parseInt(movement / stepSize)
    if(movement >= error){
      acumMovement +=movement;
      position += stepsToMove;
      if(scrollRight){
        position+=1;
      }
    }else if(movement <= -error){
      acumMovement +=movement;
      position += stepsToMove;
      if(!scrollRight){
        position-=1;
      }
    }

    gallery.style.transform = `translateX(${-acumMovement + offset}px)`;
    galleryContainer.scrollLeft = offset;

    if(position < 0){
      position = 0;
    }

    if(position > maxPosition){
      position = maxPosition;
    }

    translatePosition();
  }

  function scrollControl() {
    const galleryContainer = document.getElementById(`${id}-container`);
    if(allowScroll){
      currentScrollPosition = galleryContainer.scrollLeft;
      if(currentScrollPosition > initialScrollPosition){
        scrollRight = true;
      }else if(currentScrollPosition < initialScrollPosition){
        scrollRight = false;
      }
      
      initialScrollPosition = currentScrollPosition;
    }else{
      galleryContainer.scrollLeft = offset;
    }
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

  window.addEventListener('orientationchange',() => {setTimeout(setVariables, 20)} )
  window.addEventListener('resize',() => {setTimeout(setVariables, 20)} )

  return (
    <div className="image-gallery">
      <SubTitle>{title}</SubTitle>
      <div className="gallery-container" id={`${id}-container`} onScroll={scrollControl} onTouchEnd={touchOut} onTouchStart={touchIn}>
        <div className="gallery" id={id}>
          {imageArray.map(element => {
            return (
              <div className="gallery-image" key={element.id}>
                <GalleryItem element={element} />
              </div>
            )
          })}
        </div>
      </div>
      <span aria-hidden="true" className="fas fa-angle-right arrow right-arrow" id={`${id}-ra`} onClick={moveRight} />
      <span aria-hidden="true" className="fas fa-angle-left arrow left-arrow" id={`${id}-la`} onClick={moveLeft} />
    </div>
  );
};

export default Gallery;