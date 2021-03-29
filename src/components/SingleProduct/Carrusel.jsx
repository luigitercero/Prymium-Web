import React from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import './carrusel.module.scss';

SwiperCore.use([Navigation, Pagination,]);
export default ({ src, className, alt }) => {
  return (
    <div className={className}>
      <div className="carrousel">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {src.map((single, index)=>(
            <SwiperSlide key={index} >
              <Image
                src={single}
                alt={alt}
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