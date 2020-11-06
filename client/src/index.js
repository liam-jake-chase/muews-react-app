import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Signup from './components/SignupLogin/Signup';
import { Container } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import { AuthProvider } from './Context/AuthContext';


ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
    <Container
      className="d-flex align-items-center justify-content-center">
     <Signup />
    
    </Container>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
