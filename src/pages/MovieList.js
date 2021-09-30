import React, { useContext } from 'react';
import Banner from '../components/Banner'
import Carousel from '../components/Carousel'
import MovieContext from '../context/MovieContext';

function MovieList() {
  const { popular, banner, gener, moviesId, fetchMovieById } = useContext(MovieContext)

  // const AllMovie = async () => {
  //   gener.map((gen) => {
  //     console.log(gen.id);
  //     const AA = await fetchMovieById(gen.id);
  //     console.log(AA);
  //   })
  // }

  return (
    <div>
      <Banner banner={banner}/>
      <Carousel moviesList={popular} title={"Popular"} />

    </div>
  );
} 

export default MovieList;