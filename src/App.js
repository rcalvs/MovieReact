import { Route, Switch } from 'react-router-dom';
import './App.css';
import MovieList from './pages/MovieList';
import MovieProvider from './context/MovieProvider';
import MovieDetails from './pages/MovieDetails';
import Login from './pages/Login';

function App() {
  return (
    <Switch>
      <MovieProvider>
        <Route exact path='/' component={ Login } />
        <Route path='/browse' component={ MovieList } />
        <Route path="/movie/:id" render={ (props) => <MovieDetails { ...props } /> } />
      </MovieProvider>
    </Switch>
  );
}

export default App;
