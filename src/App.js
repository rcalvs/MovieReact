import './App.css';
// import HomeMovies from './HomeMovies';
import MovieList from './pages/MovieList';
import MovieProvider from './context/MovieProvider'

function App() {
  return (
    <div>
      <MovieProvider>
        <h1 className='text-3xl'>ALgo</h1>
        <MovieList />
      </MovieProvider>
    </div>
  );
}

export default App;
