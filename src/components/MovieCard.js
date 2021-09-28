import React from 'react';
// import { Link } from 'react-router-dom';

function MovieCard(props) {
  const { movie } = props;
  // const { id, title, storyline } = movie;
  // const link = `/movies/${id}`;
  
  return (
    <div className="border w-48 h-50 m-4">
      Movie Card
      <h1 className="font-bold">{ movie.title }</h1>
      <p>{ movie.storyline }</p>
      {/* <Link to={ link }>VER DETALHES</Link> */}
    </div>
  );

}

export default MovieCard;
