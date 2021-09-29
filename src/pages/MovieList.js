import React, { useState, useEffect } from 'react';
import * as movieAPI from '../services/movieAPI';
import MovieCard from '../components/MovieCard'
import Banner from '../components/Banner'
import * as API from '../services/API';
import Carousel from '../components/Carousel'

function MovieList() {
  const [movies, setMovies] = useState([])
  const [banner, setBanner] = useState([])
  // const [genner, setGenner] = useState([])

  useEffect(() => {
    fetchMovieApi();
  },[]);

  const fetchMovieApi = async () => {
    const getMoviesReturn = await API.getPopular();
    // const getGennerReturn = await API.getGenres();
    // const test = await API.getPopular();
    const random = Math.ceil(Math.random() * getMoviesReturn.length);
    setMovies(getMoviesReturn.results);
    setBanner(getMoviesReturn[random])
    // setGenner(getGennerReturn.genres);
    console.log(movies);
  }

  return (
    <div>
      <h1>Movie Library</h1>
      <Banner movie={banner} />
      {/* <div className="flex flex-wrap">
      {movies.map((movie) => <MovieCard  movie={movie}/>)}
      </div> */}
      {/* {genner.map((gen) => <h1>{gen.name}</h1>)} */}
      <div>
      <Carousel moviesList={movies}/>
      </div>
    </div>
  );
} 

export default MovieList;