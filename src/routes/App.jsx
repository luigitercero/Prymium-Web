import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Tienda from '../containers/Tienda';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';
import Detalle from '../containers/Detalle';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/store-lavatrastos-grifos-bidet-guatemala/:modelo"
            component={Detalle}
          />
          <Route
            exact
            path="/store-lavatrastos-grifos-bidet-guatemala/"
            component={Tienda}
          />
          
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
