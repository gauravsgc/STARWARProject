import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'; 

//import { Navbar,Nav } from 'react-bootstrap';
export class Navig extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light  bg-danger">
              <div className="navbar-brand" href="#">STARWAR</div>
                    <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item" > 
                <NavLink to="/" exact activeStyle={{color:'green'}} className="nav-link text-indigo">Home</NavLink> 
              </li> 
               
              {localStorage.getItem("logindata")?<React.Fragment>
              <li  className="nav-item"> 
                <NavLink to="/about" exact activeStyle={{color:'green'}} className="nav-link">About Us</NavLink> 
              </li>
                 <li className="nav-item" > 
                <NavLink to="/contact" exact activeStyle={{color:'green'}} className="nav-link">Contact Us</NavLink> 
              </li></React.Fragment>:''}
             
               
              
              
              </ul>
              
      
    
    
             </div>
             {localStorage.getItem("logindata")?
             <ul className="navbar-nav ml-auto border border-warning rounded-pill  mb-2 bg-success text-white">
             <li className="nav-item   "> 
                <NavLink to="/LoginPage" exact activeStyle={{color:'green'}} className="nav-link">Logout</NavLink> 
              </li>
              </ul>:<ul className="navbar-nav ml-auto border border-warning rounded-pill  mb-2 bg-success text-white">
             <li className="nav-item   "> 
                <NavLink to="/LoginPage" exact activeStyle={{color:'green'}} className="nav-link">Login</NavLink> 
              </li>
              </ul>}
             </nav>
          
  
  



  
        )
    }
}

export default Navig
