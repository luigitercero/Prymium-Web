import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '@containers/Home';
import Tienda from '@containers/Tienda';
import NotFound from '@containers/NotFound';
import Contact from '@containers/Contact';
import Layout from '@components/Layout';
import Detalle from '@containers/Detalle';
import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';
import AllProduct from '@containers/AllProduct';

const App = () => {
  const initialState = useInitialState()
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            
            <Route
              exact
              path="/store-lavatrastos-grifos-bidet-guatemala/"
              component={AllProduct}
            />

            <Route
              exact
              path="/store-lavatrastos-grifos-bidet-guatemala/:group/"
              component={Tienda}
            />

            <Route
              exact
              path="/store-lavatrastos-grifos-bidet-guatemala/:group/:modelo"
              component={Detalle}
            />

            <Route
              exact
              path="/store-lavatrastos-grifos-bidet-guatemala/"
              component={Tienda}
            />

            <Route
              exact
              path="/contacto/"
              component={Contact}
            />

            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;