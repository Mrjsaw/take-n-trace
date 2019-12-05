import React,{ Component } from 'react';
import { LoginForm } from "../components/LoginForm";

class Login extends Component {

    render() {
      return (
        <div className="App">
           <h2>Welcome to the login page</h2>
            <p>Blabla bla this is
                just some login page with a header
            </p>
            <LoginForm/>
        </div>
      );
    }
  }
  
  export default Login;
  