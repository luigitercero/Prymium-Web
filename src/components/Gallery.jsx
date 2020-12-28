import React, { useEffect } from 'react';
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

  const animationTime = 300;
  const maxPosition = imageArray.length;
  const offset =  parseInt(window.innerWidth / 2);
  const error = 20;
  let position = 0;
  let initialScrollPosition = 0;
  let currentScrollPosition = 0;
  let acumMovement = 0;
  let stepSize = 310;
  let scrollRight = false;

  useEffect(() => {
    const galleryContainer = document.getElementById(`${id}-container`);
    galleryContainer.scrollLeft = offset;
  })

  function touchIn(){
    const galleryContainer = document.getElementById(`${id}-container`);
    galleryContainer.style.overflow = 'scroll';
  }

  function touchOut(){
    const gallery = document.getElementById(id);
    const galleryContainer = document.getElementById(`${id}-container`);
    galleryContainer.style.overflow = 'hidden';
    currentScrollPosition = galleryContainer.scrollLeft;
    console.log(currentScrollPosition ,currentScrollPosition - offset, parseInt((currentScrollPosition - offset)/stepSize))
    console.log(offset);
    const movement = currentScrollPosition - offset
    const stepsToMove = parseInt(movement / stepSize) 
    if(movement >= error){
      acumMovement +=movement;
      position += stepsToMove;
      if(scrollRight){
        position++;
      }
    }else if(movement <= -error){
      acumMovement +=movement;
      position += stepsToMove;
      if(!scrollRight){
        position--;
      }
    }
    console.log(position, stepsToMove, scrollRight, !scrollRight);
    gallery.style.transform = `translateX(${offset - acumMovement}px)`;
    galleryContainer.scrollLeft = offset;
    acumMovement = position*stepSize;
    gallery.animate({ "transform": `translateX(${-position*stepSize + offset}px)` }, animationTime)
    setTimeout(() => { gallery.style.transform = `translateX(${-position*stepSize + offset}px)`; }, animationTime)
  }

  function scrollControl() {
    const galleryContainer = document.getElementById(`${id}-container`);
    currentScrollPosition = galleryContainer.scrollLeft;
    if(currentScrollPosition > initialScrollPosition){
      scrollRight = true;
    }else if(currentScrollPosition < initialScrollPosition){
      scrollRight = false;
    }

    initialScrollPosition = currentScrollPosition;
    console.log('Aloha')
  }

  function moveRight() {
    const gallery = document.getElementById(id);
    position += 1;
    gallery.animate({ "transform": `translateX(${-position*stepSize + offset}px)` }, animationTime)
    setTimeout(() => { gallery.style.transform = `translateX(${-position*stepSize + offset}px)`; }, animationTime)
  }

  function moveLeft() {
    const gallery = document.getElementById(id);
    position -= 1;
    gallery.animate({ "transform": `translateX(${-position*stepSize + offset}px)` }, animationTime)
    setTimeout(() => { gallery.style.transform = `translateX(${-position*stepSize + offset}px)`; }, animationTime)
  }

  return (
    <div className="image-gallery">
      <h2>{title}</h2>
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
      <span aria-hidden="true" className="fas fa-angle-right arrow right-arrow" id={id+'-ra'} onClick={moveRight} />
      <span aria-hidden="true" className="fas fa-angle-left arrow left-arrow" id={id+'-la'} onClick={moveLeft} />
    </div>
  );
};

export default Gallery;