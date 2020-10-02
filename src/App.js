import React from 'react';
import Layout from './hoc/Layout/Layout';
import CardFinance from './containers/CardFinance/CardFinance';
import { Route, Switch } from 'react-router-dom';
import AddCard from './containers/AddCard/AddCard';
import Login from './containers/Login/Login';
import Register from './containers/Register/Register';

function App() {
  return (
    <div>
        <Layout>
            <Switch>
                <Route path="/" exact component={CardFinance} />
                <Route path="/add" component={AddCard} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
            </Switch>
        </Layout>
    </div>
  );
}

export default App;
