/* eslint-disable radix */
/* eslint-disable no-console */
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { SubTitle } from './Title';

const GalleryItem = ({ element }) => {
  const { imagen_medium, alt, name, description, link } = element
  return (
    <>
      <img src={imagen_medium} alt={alt} decoding="async" loading="lazy" />
      <div className="image-description">
        <h3>{name}</h3>
        <p>{description}</p>
        <Link href={link}>Ver detalles</Link>
      </div>
    </>
  );
}

const Gallery = ({ title, url,sliderSink }) => {
  const error = 5;
  const gallery = useRef();
  const galleryContainer = useRef();
  const leftArrow = useRef();
  const rightArrow = useRef();
  const [imageArray, setImages] = useState([])
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
    if(position <= 0){
      leftArrow.current.style.display = 'none';
    }else{
      leftArrow.current.style.display = 'inline-block';
    }

    if(position >= maxPosition){
      rightArrow.current.style.display = 'none';
    }else{
      rightArrow.current.style.display = 'inline-block';
    }
  }

  function translatePosition(animationTime = 300){
    gallery.current.style.transitionDuration = `${animationTime}ms`;

    if(position === 0){
      acumMovement = 0;
    }else{
      acumMovement = firstStep + (position - 1)*stepSize;  
    }

    gallery.current.style.transform = `translateX(${-acumMovement + offset}px)`;

    displayArrowsControl();
  }

  const setVariables = () =>{
    try {
      width = galleryContainer.current.offsetWidth
      offset = Math.floor(width / 2)
      galleryContainer.current.scrollLeft = offset
  
      if (window.matchMedia('(max-width: 1024px)').matches){
        stepSize = 280;
      }else{
        stepSize = 310;
      }
      maxPosition = imageArray.length - Math.floor(width / stepSize);
      firstStep = calcFirstStep();
  
      translatePosition(10);
      
    } catch (err) {
      //console.log(err)
    }
  }

  function touchIn(){
    // gallery.current.style.willChange = 'transform';
    galleryContainer.current.style.overflowX = 'scroll';
    gallery.current.style.transitionDuration = `unset`;
    allowScroll = true;
  }

  function touchOut(){
    galleryContainer.current.style.overflowX = 'hidden';
    allowScroll = false;
    currentScrollPosition = galleryContainer.current.scrollLeft;
    acumMovement += currentScrollPosition - offset;
    gallery.current.style.transform = `translateX(${-acumMovement - error + offset}px)`;

    // galleryContainer.current.scrollLeft = offset;
    const movement = acumMovement - position * stepSize;
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
    currentScrollPosition = galleryContainer.current.scrollLeft;
    galleryContainer.current.scrollLeft = offset;
    if(allowScroll){  
      acumMovement += currentScrollPosition - offset;
      if((currentScrollPosition - offset) > 0){
        scrollRight = true;
      }else if((currentScrollPosition - offset) < 0){
        scrollRight = false;
      }

      gallery.current.style.transform = `translateX(${-acumMovement + offset}px)`;
      
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

  useEffect(() => {
    window.addEventListener('resize',() => {setTimeout(setVariables, 10)} )
    setVariables();
  })

  useEffect(() => {
    setImages(sliderSink);
  },[])
  
  return (
    <div className="image-gallery" id="galeria">
      <SubTitle>{title}</SubTitle>
      <div className="gallery-container" ref={galleryContainer} onScroll={scrollControl} onTouchEnd={touchOut} onTouchStart={touchIn} aria-live="polite">
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
      <span aria-hidden="true" className="arrow right-arrow" ref={rightArrow} onClick={moveRight}>
        <img src="/images/icons/right-arrow.png" alt="right-arrow" />
      </span>
      <span aria-hidden="true" className="arrow left-arrow" ref={leftArrow} onClick={moveLeft}>
        <img src="/images/icons/right-arrow.png" alt="left-arrow" />
      </span>
    </div>
  );
};

export default Gallery;