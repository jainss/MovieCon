import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Movies from './pages/Movies/Movies';
import TvSeries from './pages/TvSeries/TvSeries';
import Search from './pages/Search/Search';
import Home from './pages/Home/Home';
import WatchList from './pages/WatchList/WatchList';
// import { Search } from '@material-ui/icons';


const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/Movies" exact>
            <Movies />
          </Route>
          <Route path="/TvSeries" exact>
            <TvSeries />
          </Route>
          <Route path="/Search" exact>
            <Search />
          </Route>
          <Route path="/WatchList" exact>
            <WatchList />
          </Route>
          {/* <Navigate to="/" /> */}
        </Switch>
      </main>
    </Router>
  );
}

export default App;
