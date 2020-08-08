import React from 'react';

import './App.css';
//import PersonList from './Components/PersonList'
import Login from './component/LoginPage';

//import React, { Component } from 'react'; 
import { BrowserRouter as Router, Route, Switch,Redirect } from 'react-router-dom'; 
import Home from './component/home'; 
import About from './component/about'; 
import Contact from './component/contact'; 
import MainPage from './component/MainPage';

const ProtectedRoute =({ component: Component, ...rest }) => {
return <Route {...rest} render={(props) =>{             
return localStorage.getItem('logindata') ? <Component {...props} />: <Redirect
to="/" />

}     }/>



}


class App extends React.Component { 

  constructor(props) {
    super(props)
  
    this.state = {
       loggedInStatus:"Not Logged In",
       user:{}
    }
  }
  
  render() { 
    return ( 
      <React.Fragment>
       <Router> 
         <Switch> 
            
            {/* <Route exact path='/' component={Home}></Route> */}

            <Route exact
              path='/'
              render ={props=>(<Home {...props} loggedInStatus={this.state.loggedInStatus} />)} 
              
             />
             <Route exact
              path='/LoginPage'
              render ={props=>(<Login {...props} loggedInStatus={this.state.loggedInStatus} />)} 
              
             />

            {/* <Route exact path='/LoginPage' component={Login}></Route> */}
              <ProtectedRoute exact path='/about' component={About}></ProtectedRoute> 
             {/*  <Route exact
              path='/about'
              render ={props=>(<About {...props} loggedInStatus={this.state.loggedInStatus} />)} 
              
             />*/}
              <ProtectedRoute exact path='/contact' component={Contact}></ProtectedRoute> 
              {/*<Route exact
              path='/contact'
              render ={props=>(<Contact {...props} loggedInStatus={this.state.loggedInStatus} />)} 
              
             />*/}
              <Route exact
              path='/MainPage'
              render ={props=>(<MainPage {...props} loggedInStatus={this.state.loggedInStatus} />)} 
              
             />
            </Switch> 
          {/*<Login />*/}
       </Router> 
       </React.Fragment>
   ); 
  } 
} 
 
export default App