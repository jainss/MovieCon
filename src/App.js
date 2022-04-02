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
import TopIMDB from './pages/TopIMDB/TopIMDB';
import Home from './pages/Home/Home';
import WatchList from './pages/WatchList/WatchList';


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
          <Route path="/TopIMDB" exact>
            <TopIMDB />
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
