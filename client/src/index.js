import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import Signup from './components/SignupLogin/Signup';
// import { Container } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
// import { AuthProvider } from './Context/AuthContext';
// import Dashboard from './components/SignupLogin/Dashboard'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import Login from './components/SignupLogin/Login'
// import PrivateRoute from './components/SignupLogin/PrivateRoute'
// import ForgotPassword from './components/SignupLogin/ForgotPassword'
// import UpdateProfile from './components/SignupLogin/UpdateProfile'
import NavbarMenu from './components/SideBar/NavbarMenu';

ReactDOM.render(
  <React.StrictMode>
    <App />

    {/* <Router> */}
     
     
    {/* <Container
      className="d-flex-col align-items-center justify-content-center">
        <AuthProvider>
          <Switch>
     
            <PrivateRoute exact path="/" component={Dashboard}/>
            <PrivateRoute path="/update-profile" component={UpdateProfile} />
            <Route path='/signup' component={Signup} />
            <Route path='/login' component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
          </Switch>
        </AuthProvider>
       
      

    </Container> */}
      {/* </Router> */}

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
