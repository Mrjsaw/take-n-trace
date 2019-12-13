import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import App from "./App";
import About from "./pages/About";
import Notfound from "./pages/Notfound";
import Login from "./pages/Login";
import PackageForm from "./pages/Form.js";
import shippingOptions from "./pages/shippingOptions.js";
import Header from "./components/Header";
import Order from "./pages/Order.js";
import * as serviceWorker from "./serviceWorker";

const routing = (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />
      <Route exact path="/plan" component={shippingOptions} />
      <Route path="/plan/form" component={PackageForm} />
      <Route path="/form" component={PackageForm} />
      <Route path="/admin" component={Login} />
      <Route path="/order" component={Order} />
      <Route component={Notfound} />
    </Switch>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
