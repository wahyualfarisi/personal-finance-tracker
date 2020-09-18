import React from 'react';
import Layout from './hoc/Layout/Layout';
import CardFinance from './containers/CardFinance/CardFinance';
import { Route, Switch } from 'react-router-dom';
import AddCard from './containers/AddCard/AddCard';

function App() {
  return (
    <div>
        <Layout>
            <Switch>
                <Route path="/" exact component={CardFinance} />
                <Route path="/add" component={AddCard} />
            </Switch>
        </Layout>
    </div>
  );
}

export default App;
