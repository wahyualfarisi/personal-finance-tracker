import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AddCard from './containers/AddCard/AddCard';
import Login from './containers/Login/Login';
import Logout from './containers/Logout/Logout';

import Me from './containers/Me/Me';
import LandingPage from './containers/LandingPage/LandingPage';

import * as authActions from './store/actions/auth';
import Transaction from './containers/Transaction/Transaction';

class App extends Component {

  componentDidMount(){
    this.props.onCheckState()
  }

  render() {
    let routes = (
      <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/add" component={AddCard} />
          <Route path="/login" component={Login} />
          
      </Switch>
    );
  
  
    if(this.props.isAuthenticated){
      routes = (
        <Switch>
            <Route path="/" exact component={Me} />
            <Route path="/card/:id" component={Transaction} />
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
} 
  


const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null 
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onCheckState: () => dispatch( authActions.authCheckState( ) )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
