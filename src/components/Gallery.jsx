import React, { Fragment } from 'react';

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
  let position = 0;


  function scrollControl() {
    const gallery = document.getElementById(id);
    gallery.scrollLeft;
  }

  function moveRight() {
    const gallery = document.getElementById(id);
    position += 310;
    gallery.animate({ "transform": `translateX(-${position}px)` }, animationTime)
    setTimeout(() => { gallery.style.transform = `translateX(-${position}px)`; }, animationTime)
  }

  function moveLeft() {
    const gallery = document.getElementById(id);
    position -= 310;
    gallery.animate({ "transform": `translateX(-${position}px)` }, animationTime)
    setTimeout(() => { gallery.style.transform = `translateX(-${position}px)`; }, animationTime)
  }

  return (
    <>
      <h2>{title}</h2>
      <div className="gallery-container">
        <div className="gallery" id={id}>
          {imageArray.map(element => {
            return (
              <div className="gallery-image" key={element.id}>
                <GalleryItem element={element} />
              </div>
            )
          })}
        </div>
        <span aria-hidden="true" className="fas fa-angle-right right-arrow" onClick={moveRight} />
        <span aria-hidden="true" className="fas fa-angle-left left-arrow" onClick={moveLeft} />
      </div>
    </>
  );
};

export default Gallery;