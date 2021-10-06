import React, { useContext, useEffect } from 'react';
import Banner from '../components/Banner'
import Carousel from '../components/Carousel'
import MovieContext from '../context/MovieContext';

function MovieList() {
  const { popular, banner, moviesId } = useContext(MovieContext)
  
  // const logDaora = () => {
  //   console.log(Object.entries(moviesId))
  //   // Array com: 0 = String e 1 = Array
  // //   Object.entries(moviesId).map((movie) => (
  // //       console.log(movie[1])
  // //     ))
  // }

  return (
    <div>
      <Banner banner={banner}/>
      <Carousel moviesList={popular} title={"Popular"} />
      {/* <button onClick={() => console.log(logDaora())}>
        TESTE
      </button> */}
      { moviesId
        ? Object.entries(moviesId).map((movie) => (

          <Carousel moviesList={movie[1]} title={movie[0]}/>
        ))
        // ? <Carousel moviesList={popular} title={"Popular"} />
        : <p>Loading</p>
      }
    </div>
  );
} 

export default MovieList;