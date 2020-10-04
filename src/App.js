import React from 'react';
import Layout from './hoc/Layout/Layout';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AddCard from './containers/AddCard/AddCard';
import Login from './containers/Login/Login';
import Logout from './containers/Logout/Logout';


import Me from './containers/Me/Me';
import LandingPage from './containers/LandingPage/LandingPage';

const App = (props) => {

  let routes = (
    <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/add" component={AddCard} />
        <Route path="/login" component={Login} />
        <Redirect to="/" />
    </Switch>
  );


  if(props.isAuthenticated){
    routes = (
      <Switch>
          <Route path="/" exact component={Me} />
          <Route path="/add" component={AddCard} />
          <Route path="/logout" component={Logout} />
          <Redirect to="/" />
      </Switch>
    )
  }


  return (
    <div>
        <Layout>
            {routes}
        </Layout>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null 
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
