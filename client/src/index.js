import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import App from './App';
import About from './pages/About'
import Notfound from './pages/Notfound'
import Login from './pages/Login'
import Header from './components/Header'
import Footer from './components/Footer'
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
        <Header />
        <div>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/about" component={About} />
                <Route path="/form" component={About} />
                <Route path="/admin" component={Login} />
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


