import React from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import YoutubeVideo from "./Video";

// Import Swiper styles
import './carrusel.module.scss';


export default ({ src, className, video, alt,title='' }) => {

  return (
    <div className={className}>
      
      <div className="carrousel">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          
          
          {src.map((single, index)=>(
            <>
              <SwiperSlide key={index}>
                <Image
                  src={single}
                  alt={alt}
                  key={index}
                  index={index} />
              </SwiperSlide> 

              {( index === 0 && video !== "") && (
                <SwiperSlide key={index}>
                  {console.log('video', video)}
                  <Video key={index} vid={video} />
                </SwiperSlide>
              )}
            </>
          ))}
        </Swiper>
      </div>
    </div>
  );
};


const Image = ({ src, alt, className, imgClass, index }) => {
  return (
    
    <figure className={className}>
      <img src={src} alt={alt} index={index} className={imgClass || ''} />
    </figure>
    
  )
}
const Video = ({className, vid }) => {
  
    return (
      <figure className={className}>
        <YoutubeVideo title='Sanitarios' vid={vid} />
      </figure>
    )
}
