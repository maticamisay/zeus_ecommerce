import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../Containers/Home";
import Layout from "../Components/Layout";
import Checkout from "../Containers/Checkout";
import Information from "../Containers/Information";
import Payment from "../Containers/Payment";
import Success from "../Containers/Success";
import NotFound from "../Containers/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/checkout/information" component={Information} />
          <Route exact path="/checkout/payment" component={Payment} />
          <Route exact path="/checkout/success" component={Success} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
