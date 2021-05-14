import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Movie from './pages/Movie';
import NotFound from './pages/NotFound';

import { GlobalStyle } from './styles/GlobalStyle';

const App = () => (
  <>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/:movieId">
          <Movie />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
    <GlobalStyle />
  </>
);

export default App;
