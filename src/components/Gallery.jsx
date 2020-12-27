import React, {Fragment} from 'react';

const GalleryItem = props => {
  return(
    <Fragment>
      <img src={props.element.image} alt={props.element.alt} />
      <div className="image-description">
        <h3>{props.element.name}</h3>
        <p>{props.element.description}</p>
      </div>
    </Fragment>
  );
}

const Gallery = props => {
  const id = props.id;
  const animationTime = 300;
  let position = 0;


  function scrollControl(){
    const gallery = document.getElementById(id);
    gallery.scrollLeft;
  }

  function moveRight(){
    const gallery = document.getElementById(id);
    position += 310;
    gallery.animate({"transform": `translateX(-${position}px)`}, animationTime)
    setTimeout(()=> {gallery.style.transform = `translateX(-${position}px)`;}, animationTime) 
  }

  function moveLeft(){
    const gallery = document.getElementById(id);
    position -= 310;
    gallery.animate({"transform": `translateX(-${position}px)`}, animationTime)
    setTimeout(()=> {gallery.style.transform = `translateX(-${position}px)`;}, animationTime) 
  }

  return (
    <Fragment>
      <h2>{props.title}</h2>
      <div className="gallery-container">
        <div className="gallery" id={id}>
          {props.imageArray.map(element => {
            return (
              <div className="gallery-image" key={element.id}>
                <GalleryItem element={element} />
              </div>
            )
          })}
        </div>
        <button className="fas fa-angle-right right-arrow" onClick={moveRight}></button>
        <button className="fas fa-angle-left left-arrow" onClick={moveLeft}></button>
      </div>
    </Fragment>
  );
};

export default Gallery;