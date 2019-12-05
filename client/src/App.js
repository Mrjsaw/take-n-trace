import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.svg";
import "./App.css";

//importing all the pages
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { About } from "./pages/About";
import { SendPackage } from "./pages/SendPackage";
import { Layout } from "./components/Layout";
import { Header } from "./components/Header";

class App extends React.Component {
  state = {
    data: null
  };

  componentDidMount() {
    // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch("/express_backend");
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  render() {
    return (
      <React.Fragment>
        <Router>
          <Header />
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/SendPackage" component={SendPackage} />
              <Route path="/About" component={About} />
              <Route path="/Login" component={Login} />
            </Switch>
          </Layout>
        </Router>
      </React.Fragment>
    );
  }
}
export default App;
