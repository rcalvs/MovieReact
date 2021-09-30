import React, { useState, useEffect } from 'react';
import MovieContext from './MovieContext';
import * as API from '../services/API';

function MovieProvider({ children }) {
  const [popular, setPopular] = useState([])
  const [banner, setBanner] = useState([])
  const [gener, setGener] = useState([])
  const [moviesId, seMoviesId] = useState([])


  useEffect(() => {
    fetchMovieApi();
    fethGener();
  },[]);

  // useEffect(() => {
  //   gener.forEach((gen) => fetchMovieById(gen.id))
  // },[gener]);


  const fethGener = async () => {
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
    seMoviesId(getMoviesById.results[0])
  }


  return (
    <MovieContext.Provider
      value={ {popular, banner, gener, moviesId, fetchMovieById} }
      >
      { children }
    </MovieContext.Provider>
  );
}

export default MovieProvider;