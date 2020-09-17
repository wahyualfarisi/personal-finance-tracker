import React from 'react';
import Layout from './hoc/Layout/Layout';
import CardFinance from './containers/CardFinance/CardFinance';

function App() {
  return (
    <div>
        <Layout>
            <CardFinance />
        </Layout>
    </div>
  );
}

export default App;
