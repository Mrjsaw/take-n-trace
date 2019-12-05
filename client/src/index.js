import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import App from './App';
import About from './pages/About'
import Notfound from './pages/Notfound'
import Footer from './components/Footer'
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Track</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/form">Create package</Link>
          </li>
          <li>
            <Link to="/about">Dashboard</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/about" component={About} />
          <Route path="/form" component={About} />
          <Route component={Notfound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
