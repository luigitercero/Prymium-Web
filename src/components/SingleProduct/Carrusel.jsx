import React from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import YoutubeVideo from "./Video";

// Import Swiper styles
import './carrusel.module.scss';

SwiperCore.use([Navigation, Pagination,]);
export default ({ src, className, alt,title='' }) => {

  return (
    <div className={className}>

      <div className="carrousel">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          {title.toLocaleLowerCase() === "sanitario con bidet" && (
            <SwiperSlide key="102l234s">
              <Video key="102l234s" />
            </SwiperSlide>
          )}
          
          {src.map((single, index)=>(
            <SwiperSlide key={index}>
              <Image
                src={single}
                alt={alt}
                key={index}
                SwiperSlide={SwiperSlide}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};


const Image = ({ src, alt, className, imgClass }) => {
  return (
    
    <figure className={className}>
      <img src={src} alt={alt} className={imgClass || ''} />
      
    </figure>
    
  )
}
const Video = ({className }) => {
  
    return (
      <figure className={className}>
        <YoutubeVideo title='Sanitarios' vid='WB7dplMV6CI' />
      </figure>
    )
}
