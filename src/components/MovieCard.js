import React from 'react';
// import { Link } from 'react-router-dom';

function MovieCard(props) {
  const { movie } = props;
  // const { id, title, storyline } = movie;
  // const link = `/movies/${id}`;
  return (
    <div className="relative border w-48 h-54 min-w-min min-h-full m-4">
      <img
        className="object-contain z-0"
        alt="poster"
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
      <div className="opacity-0 hover:opacity-100 duration-300 
        bg-gradient-to-b from-transparent to-black
        absolute top-0 border flex-col justify-center items-center
        m-auto font-bold text-white w-48 h-54 min-w-min min-h-full
        
        ">
        <h1 className="flex justify-center absolute inset-x-0 bottom-0 m-4">
          { movie.title }
        </h1>
      </div>
      {/* <Link to={ link }>VER DETALHES</Link> */}
    </div>
  );

}

export default MovieCard;
