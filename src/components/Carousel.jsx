import React from 'react';
import MovieCard from './MovieCard'
// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

export default function Carousel(props) {
  const { moviesList } = props;
  console.log(moviesList);
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={0}
      slidesPerView={7}
      slidesPerGroup={1}
      loop={true}
      // navigation
      pagination={{ clickable: true }}
      // loopFillGroupWithBlank={true}

      className="w-full	h-full"
    >
    {moviesList.map((movie) => (
      <SwiperSlide>
        <MovieCard  movie={movie}/>
      </SwiperSlide>))}


      {/* <SwiperSlide>
        <div className="border box-content h-32 w-32 m-4 bg-green-700">
        Slide 1
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="border box-content h-32 w-32 m-4 bg-yellow-700">
        Slide 2
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="border box-content h-32 w-32 m-4 bg-blue-700">
        Slide 2
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="border box-content h-32 w-32 m-4 bg-indigo-700">
        Slide 2
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="border box-content h-32 w-32 m-4 bg-purple-700">
        Slide 2
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="border box-content h-32 w-32 m-4 bg-gray-700">
        Slide 2
        </div>
      </SwiperSlide> */}

    </Swiper>
  );
};