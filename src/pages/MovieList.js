import React, { useContext, useEffect } from 'react';
import Banner from '../components/Banner'
import Carousel from '../components/Carousel'
import MovieContext from '../context/MovieContext';

function MovieList() {
  const { popular, banner, gener, moviesId, AllMovie } = useContext(MovieContext)

  return (
    <div>
      <Banner banner={banner}/>
      <Carousel moviesList={popular} title={"Popular"} />
      <button onClick={() => AllMovie()}>
        TESTE
      </button>
    </div>
  );
} 

export default MovieList;