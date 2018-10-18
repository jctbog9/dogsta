import React from 'react'
import { Router, browserHistory, Route, IndexRoute } from 'react-router';

import BreedShowContainer from '../containers/BreedShowContainer';
import BreedsContainer from '../containers/BreedsContainer';

const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={BreedsContainer} />
      <Route path='/breeds' component={BreedsContainer} />
    </Router>
  )
}

export default App;
