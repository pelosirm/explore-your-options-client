import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';

import FrontPage from './components/front-page'
import SearchCollegesPage from './components/search-colleges'
import SearchCareersPage from './components/search-careers'
import SearchPage from './components/search-page'
import SignIn from './components/sign-in'
import SignUp from './components/sign-up'
import CareerOutput from './components/career-output'
import PrivateRoute from './components/private-route'
import SavedInfo from './components/saved-info'
import CollegeResults from './components/college-results-page'
import CollegeDetails from './components/college-detail'
import Compare from './components/compare-results'


class App extends Component {

  render() {
    return (
      <Router history={history}>
        <div>
          <Switch>
            <Route exact path="/" component={FrontPage} />
            <Route exact path="/search-colleges-page" component={SearchCollegesPage} />
            <Route exact path="/search-careers-page" component={SearchCareersPage} />
            <PrivateRoute path="/search-page" component={SearchPage} />
            <Route exact path="/sign-in" component={SignIn} />
            <Route exact path="/sign-up" component={SignUp} />
            <PrivateRoute exact path="/career-results" component={CareerOutput} />
            <Route exact path="/college-results" component={CollegeResults} />>
            <Route path="/college-results/:id" component={CollegeDetails}></Route>
            <PrivateRoute exact path="/saved-info" component={SavedInfo} />
            <PrivateRoute exact path="/compare" component={Compare} />
          </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
