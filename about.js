import React, { Component } from 'react'
import Nav from './Navig';
import axios from 'axios';

export class about extends Component {
    state = {
        persons: []
      }
      componentDidMount() {
        axios.get(`https://swapi.dev/api/people/`)//http get request res=>respone https://jsonplaceholder.typicode.com/users
          .then(res => {
    console.log(res.data.results);
        
         this.setState({ persons:res.data.results });
        
          }
         
          
          )
         this.getPeople();
      }
      getPeople()
      {
        const {persons}=this.state;
        
        console.log({persons})
          
      }
    render() {
        const {persons}=this.state;
        return (
            <div>
                 <Nav />
                about page

                here we will work in grid view of the data.....
                
        {

          persons.map((p) =>{
//console.log(p)
return(
  <div key={p.url}>
<h1>{p.name}---{p.birth_year}{p.films}</h1>
    </div>
)
          })
        }
      
            </div>
        )
    }
}

export default about
