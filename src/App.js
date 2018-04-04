import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import FrontPage from './components/front-page'
import SearchCollegesPage from './components/search-colleges'
import SearchCareersPage from './components/search-careers'
import SearchPage from './components/search-page'
import SignIn from './components/sign-in'
import SignUp from './components/sign-up'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={FrontPage} />
          <Route exact path="/search-colleges-page" component={SearchCollegesPage} />
          <Route exact path="/search-careers-page" component={SearchCareersPage} />
          <Route exact path="/search-page" component={SearchPage} />
          <Route exact path="/sign-in" component={SignIn} />
          <Route exact path="/sign-up" component={SignUp} />
      </div>
      </Router>
    );
  }
}

export default App;
