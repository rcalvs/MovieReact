export async function getGenres() {
  const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`);
  return response.json();
}

export async function getPopular() {
  const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR&page=1`);
  return response.json();
}


// export async function getProductsFromCategoryAndQuery(categoryId, query) {
//   const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
//   return response.json();
// }

// export async function getProductsFromQuery(query) {
//   const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
//   return response.json();
// }

// export async function getProductsFromCategory(categoryId) {
//   const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`);
//   return response.json();
// }

// export async function getProductById(productId) {
//   const response = await fetch(`https://api.mercadolibre.com/items/${productId}`);
//   const xablau = await response.json();
//   console.log(xablau);
//   return xablau;
// }