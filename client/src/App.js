import React, {Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/layout/Home';
import Register from './components/Patients/register/Register';
import Login from './components/Patients/login/Login';
import Patient from './components/Patients/Patient'
import PatientState from './context/patient/PatientState';
import BookingState from './context/booking/BookingState';
import './App.css';

const App = () => {
  return (
    <PatientState>
      <BookingState>
        <Router>
        <Fragment>
        <Navbar/>
        <div className='App center'>
          <Switch>
              <Route exact path='/home' component={Home}/>
              <Route  path='/login' component={Login}/>
              <Route exact path='/register' component={Register}/>
              <Route exact path='/' component={Patient}/>
          </Switch>
        </div> 
        </Fragment>
        </Router>
      </BookingState>
    </PatientState>
      
  )
}

export default App;
