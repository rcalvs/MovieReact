import React, { useState, useEffect, useContext } from 'react';
import MovieContext from '../context/MovieContext';

function MovieDetails(props) {
  const [movie, setMovie] = useState()
  
  const { fetchMovieDetail } = useContext(MovieContext)

  useEffect(() => {
    fetchMovieApi();
  },[])

  const fetchMovieApi = async () => {
    const { match: { params: { id } } } = props;
    const getMovieReturn = await fetchMovieDetail(id);
    setMovie(getMovieReturn);
  }

  // console.log(movie);
    return (
      <div>
        <h1>Movie Details</h1>
        <button onClick={() => console.log(movie)}>
          Clica aki
        </button>

        
      </div>
    )
}

export default MovieDetails;