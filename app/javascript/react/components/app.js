import React from 'react'
import { Router, browserHistory, Route, IndexRoute } from 'react-router';

import BreedShowContainer from '../containers/BreedShowContainer';
import IndexContainer from '../containers/IndexContainer';

const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={IndexContainer} />
      <Route path='/breeds' component={IndexContainer} />
    </Router>
  )
}

export default App;
