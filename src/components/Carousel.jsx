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
  const { moviesList, title } = props;
  return (
    <div className="h-full border-4 border-red-700">
      <h1 className="border-4"> {title}</h1>

    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={5}
      // slidesPerView={7}
      slidesPerGroup={2}
      loop={true}
      breakpoints={{
        320: {
          slidesPerView: 3,
        },
        480: {
          slidesPerView: 4,
        },
        640: {
          slidesPerView: 5,
        },
        780: {
          slidesPerView: 7,
        },
    }}
      className=""
    >

      {moviesList.map((movie) => (
        <SwiperSlide className="">
          <MovieCard  movie={movie}/>
        </SwiperSlide>))}
    </Swiper>
    </div>
  );
};