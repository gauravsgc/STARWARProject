import React from 'react';

import axios from 'axios';

export default class PersonList extends React.Component {
 
constructor(props) {
  super(props)

  this.state = {
    persons: [] 
  }
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
    
    //alert({persons})
      
  }
  

  render() {
    const {persons}=this.state;
    return (
      <div>
        {

          persons.map((p) =>{
//console.log(p)
return(
  <div key={p.url}>
<h1>{p.name}---{p.birth_year}</h1>
    </div>
)
          })




        }
      </div>
    );
  }
}