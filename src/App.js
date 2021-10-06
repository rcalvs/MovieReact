import { Route, Switch } from 'react-router-dom';
import './App.css';
import MovieList from './pages/MovieList';
import MovieProvider from './context/MovieProvider';
import MovieDetails from './pages/MovieDetails';

function App() {
  return (
    <Switch>
      <MovieProvider>
        <Route exact path='/'>
          {/*
          Nota do Desinger: Colocar um header daora
          <h1 className='text-3xl'>ALgo</h1> */}
          <MovieList />
        </Route>
        <Route path="/movie/:id" render={ (props) => <MovieDetails { ...props } /> } />
      </MovieProvider>
    </Switch>
  );
}

export default App;
