import React, { Component } from 'react'
import Nav from './Navig';
//import { NavLink } from 'react-router-dom'; 
export class MainPage extends Component {
  
    render() {
        return (
            
            <div>
              <Nav />
              <h2>status:{this.props.loggedInStatus}</h2>
             here i will make navigation bar....   
          
  
  


               You can login to next page
            </div>
        )
    }
}

export default MainPage
