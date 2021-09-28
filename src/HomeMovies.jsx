import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function HomeMovies(){
  return (
    <div>
      <h1>Movie Library</h1>
      {/* <BrowserRouter>
      <Switch>
        <Route exact path="/movies" component={ MovieList } />
        <Route path="/movies/:id/edit" render={ (props) => <EditMovie { ...props } /> } />
        <Route path="/movies/new" component={ NewMovie } />
        <Route path="/movies/:id" render={ (props) => <MovieDetails { ...props } /> } />
        <Route component={ NotFound } />
      </Switch>
    </BrowserRouter> */}
    </div>
  );
} 

export default HomeMovies;