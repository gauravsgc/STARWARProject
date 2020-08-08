import React, { Component } from 'react'
import './LoginPage.css'
//import MainPage from './MainPage';
//import Home from './home'; 
import axios from 'axios';
import Nav from './Navig';

export class LoginPage extends Component {
 constructor(props) {
     super(props)

     localStorage.removeItem("logindata"); //to check logOut..
     console.log(localStorage.getItem("logindata"));
      this.state = {
          isLoggedIn:0,
          persons: [],
        
     };
     this.handleSubmit = this.handleSubmit.bind(this);
     this.handlesuccessfulAuth=this.handlesuccessfulAuth.bind(this);
 }
//handle the login page......
handlesuccessfulAuth()
    {
        //to move next page after login
        alert("hello gud work");
        this.props.history.push('/MainPage');
    }



 componentDidMount() {
  axios.get(`https://swapi.dev/api/people/`)//http get request res=>respone https://jsonplaceholder.typicode.com/users
    .then(res => {
//console.log(res.data.results);
  this.setState({ persons:res.data.results });
 
   
    }
     )
    }
handleSubmit=event=>
    {
    event.preventDefault();
    const name = this.name.value;
    const pwd = this.pwd.value;

    
    const {persons}=this.state;
    console.log({persons})
    const data =persons.filter(x=>x.name===name && x.birth_year ===pwd);
    const a=data.length;
    
    
    console.log(a);
    if(a)
    {
            //alert('you are in');
            localStorage.setItem('logindata',1);
    console.log(localStorage.getItem('logindata'));//this is the way to store in local storage..
    console.log('you are in');
    this.setState({isLoggedIn:1});

    this.handlesuccessfulAuth();
   
   // this.props.history.push(MainPage);
          //const {persons}=this.state;
         // console.log({persons})
       
    }
    else
    {
      localStorage.removeItem('logindata');  
    }
    }
    render() {
    const isLoggedIn = this.state.isLoggedIn;
    let msg;
    if (isLoggedIn) {
    //if login...
    //msg = < Home/>;
     } 
     else {
      msg = '';
    }
    return (
      <React.Fragment>
         <Nav />
         <h2>status:{this.props.loggedInStatus}</h2>
            <div  className="a">
           <div className="form-group">
           <form onSubmit={this.handleSubmit} >
    <label >Name</label>
    <input type="text" className="form-control" placeholder="Name" ref={(input)=>this.name=input} />
    <label >DOB</label>
    <input type="text" className="form-control" placeholder="DOB" ref={(input)=>this.pwd=input}   />
    <button  type="submit" className="btn btn-success">Login </button>
    
    </form>
    </div> 
   {msg} 
    {this.state.isLoggedIn}
    </div>
    </React.Fragment>
    )
    }
}

export default LoginPage

