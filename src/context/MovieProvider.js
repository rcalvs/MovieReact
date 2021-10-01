import React, { useState, useEffect } from 'react';
import MovieContext from './MovieContext';
import * as API from '../services/API';

function MovieProvider({ children }) {
  const [popular, setPopular] = useState([])
  const [banner, setBanner] = useState([])
  const [gener, setGener] = useState([])
  const [moviesId, setMoviesId] = useState({})

  useEffect(() => {
    fetchGener()
    fetchMovieApi();
    AllMovie();
  },[]);

  const fetchGener = async () => {
    const getGennerReturn = await API.getGenres();
    setGener(getGennerReturn.genres);
  }

  const fetchMovieApi = async () => {
    const getMoviesReturn = await API.getPopular();
    const random = Math.ceil(Math.random() * getMoviesReturn.results.length);
    setPopular(getMoviesReturn.results);
    setBanner(getMoviesReturn.results[random])
  }

  const fetchMovieById = async (id) => {
    const getMoviesById = await API.getById(id);
    return getMoviesById.results;
  }

  const AllMovie = async () => {
    const getGennerReturn = await API.getGenres();
    const test = [...getGennerReturn.genres]
    // console.log(test);
    const movieTest = {};
    test.forEach(async (gen, i) => {
      const getMovies = await fetchMovieById(gen.id)
      return movieTest[gen.name] = getMovies;
    })
    // console.log(movieTest);
    setMoviesId(movieTest)
    console.log(moviesId);
  }

  return (
    <MovieContext.Provider
      value={ {popular, banner, gener, moviesId, AllMovie} }
      >
      { children }
    </MovieContext.Provider>
  );
}

export default MovieProvider;