import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import YoutubeVideo from "./Video";
import './carrusel.module.scss';

export default ({ src, className, video, alt, title='' }) => {

  return (
    <div className={className}>
      <div className="carrousel">
        
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          navigation={true}
          rewind={true}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Pagination]}
          >
        
          {src.map((single, index) => (
            <React.Fragment key={index}>
            
              <SwiperSlide key={index}>
                <Image
                  src={single}
                  key={index}
                  index={index} />
              </SwiperSlide>

              {( index === 0 && video !== "") && (
                <SwiperSlide key={`video-${index}`}>
                  <Video 
                    key={`video-${index}`}
                    index={index} 
                    vid={video} />
                </SwiperSlide>
              )}
              
            </React.Fragment>

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