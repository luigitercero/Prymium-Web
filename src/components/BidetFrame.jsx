import React from 'react';
import AnimatedGallery from './AnimatedGallery';
import { SubTitle } from './Title';
import '../styles/components/bidet.scss';


const BidetItem = ({ item }) => {
  const { image, alt, description } = item;
  return (
    <div className="bidetitem">
      <img src={image} alt={alt} />
      <span>{description}</span>
      <div className="overlay" />
      <div className="bottom-overlay" />
    </div>
  );
}; 

const BidetFrame = ({ itemsArray }) => {
  const getList = () =>{
    return(
      itemsArray.map(item => { return(<BidetItem key={item.id} item={item} />) } )
    )  
  }

  return (
    <div className="bidetframe">
      <SubTitle>Bidet</SubTitle>
      <div className="gallery-wrapper">
        <AnimatedGallery baseName="bidet">
          {getList()}
        </AnimatedGallery>
        <div className="gallery-overlay" />
      </div>
    </div>
  );
};

export default BidetFrame;