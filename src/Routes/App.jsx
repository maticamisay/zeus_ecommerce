import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../Containers/Home";
import Layout from "../Components/Layout";
import Checkout from "../Containers/Checkout";
import Information from "../Containers/Information";
import Payment from "../Containers/Payment";
import Success from "../Containers/Success";
import NotFound from "../Containers/NotFound";
import Detail from "../Containers/Detail";
import AppContext from "../Context/AppContext";
import useInitialState from '../Hooks/useInitialState'

function App() {
  
    const initialState = useInitialState();
    return (
    <AppContext.Provider value={initialState}>
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/categoria/:category" component={Home} />
          <Route exact path="/detalle/:id" component={Detail} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/checkout/information" component={Information} />
          <Route exact path="/checkout/payment" component={Payment} />
          <Route exact path="/checkout/success" component={Success} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
