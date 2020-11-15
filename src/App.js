import React from "react";
import logo from './logo.svg';
import './App.css';
import {Card} from "react-bootstrap";
import {v4 as uuidv4} from "uuid";
import ListeMovies from './Components/ListMovies';
import AddModel from './Components/AddModel'




class App extends React.Component {
  state = {
    movies : [
      {
        id:uuidv4(),
        name:"inception",
        image:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
       
        year:"2013"
      },
      {
        id:uuidv4(),
        name:"inception",
        image:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg" ,      
        year:"2013",
      }, {
        id:uuidv4(),
        name:"inception",
        image:"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg",     
        year:"2013"
      }
    ],
  };
  add = (newMovie)=>{
    this.setState({
      movies : this.state.movies.concat(newMovie)
    })
  }
  render() {
    return (
     <div className="App">
        <header className="App-header">
          <h1>Movie App</h1>
         <ListeMovies movies={this.state.movies}  />
     
          <AddModel addMovie= {(newMovie)=>this.add(newMovie)} />
          </header>
      </div>
  );
}
}
 
         

export default App;
