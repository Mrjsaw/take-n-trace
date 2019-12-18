import React, { Component, Fragment } from 'react';
import { BrowserRouter, withRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';
import Container from 'react-bootstrap/Container'
import Header from './Components/Header'
import Home from './Components/Home'
import ShowPackage from './Packages/ShowPackage'
import Packages from './Packages/Packages'
import Reports from './Couriers/Reports';
import Couriers from './Couriers/Couriers'
import NotFound from './Errors/404'
import Statistics from './Statistics/Statistics';
import Callback from './Callback';
import SecuredRoute from './SecuredRoute/SecuredRoute';
import auth0Client from './Auth';


class App extends Component {
  state = {
    packages: [],
    couriers: []
  }

  async componentDidMount() {
    if (this.props.location.pathname === '/callback') return;
    try {
      await auth0Client.silentAuth();
      this.forceUpdate();
    } catch (err) {
      if (err.error !== 'login_required') console.log(err.error);
    }
    axios.get(`/getPackages`)
      .then(res => {
        this.setState({ packages: res.data });
      });
    axios.get(`/getCouriers`)
      .then(res => {
        this.setState({ couriers: res.data });
      });
  }

  render() {
    const { packages } = this.state;
    const { couriers } = this.state;

    return (
      <BrowserRouter>
        <Fragment>
          <Header />

          <Container>
            <Switch>
              <SecuredRoute path="/" exact component={Home} />

              <Route path={`/packages/:packageId`} exact render={
                ({ match }) => {
                  const pack = packages.find(pack => pack.id.toString() === match.params.packageId);
                  if (!pack) {
                    return <NotFound />
                  }
                  return <ShowPackage {...pack} />
                }
              } />
              <Route path="/packages" render={props => <Packages {...props} packages={packages}></Packages>} />

              <Route path={`/couriers/:courierId`} exact render={
                ({ match }) => {
                  const courier = couriers.find(courier => courier.id.toString() === match.params.courierId);
                  if (!courier) {
                    return <NotFound />
                  }
                  console.log(courier);
                  return <Reports {...courier} />
                }
              } />
              <Route path="/couriers" render={props => <Couriers {...props} couriers={couriers}></Couriers>} />

              <Route path="/statistics" component={Statistics} />
              <Route path='/callback' component={Callback}/>
              <Route component={NotFound} />
            </Switch>
          </Container>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default withRouter(App);