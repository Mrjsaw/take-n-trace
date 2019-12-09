import React, { Component } from 'react';
import NavBar from './NavBar/NavBar';
import Callback from './Callback';
import {Route, withRouter, Switch} from 'react-router-dom';
import auth0Client from './Auth';
import PackageForm from './Form.js'
import About from './About'
import Homepage from './Homepage'




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkingSession: true,
    }
  }
  
  async componentDidMount() {
    if (this.props.location.pathname === '/callback'){
      this.setState({checkingSession:false});
      return;
    }
    try {
      await auth0Client.silentAuth();
      this.forceUpdate();
    } catch (err) {
      if (err.error !== 'login_required') console.log(err.error);
    }
    this.setState({checkingSession:false});
  }

  render() {
    return (
      <div>
        <NavBar/>

        <Switch>
                <Route exact path="/" component={Homepage} />
                <Route path="/about" component={About} />
                <Route path="/form" component={PackageForm} />
                <Route exact path='/callback' component={Callback}/>
          </Switch>
        
      </div>
    );
  }
}

export default withRouter(App);