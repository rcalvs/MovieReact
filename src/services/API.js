export async function getGenres() {
  const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`);
  return response.json();
}

export async function getPopular() {
  const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR&page=1`);
  return response.json();
}

export async function getById(id) {
  const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR&sort_by=popularity.asc&page=1&with_genres=${id}`);
  return response.json();
}
