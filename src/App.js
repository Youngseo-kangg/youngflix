import React from 'react'
import axios from "axios"
import Home from "./Home/Home"
import MoviesList from "./MoviesList/MoviesList"
import Login from "./Login/Login"
import LoadingIndicator from "./LoadingIndicator/LoadingIndicator"

import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import "./App.css"

class App extends React.Component{
  state = {
    isLoading : true,
    movies : [], 
  }
  getMovies = async () => {
    const {data : {data : {movies}}} = await axios.get("http://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating")
    this.setState({ movies , isLoading:false})
  }
  componentDidMount(){
    this.getMovies()
  }
  
  render(){
    const { isLoading, movies } = this.state

    return (
      <main>
        {isLoading?
        <LoadingIndicator />
        :
        <BrowserRouter>
          <ul className="navbar">
            <h1>Youngflix</h1>
            <li><Link to="/" className="navbarItem">Home</Link></li>
            <li><Link to="/Movies" className="navbarItem">Movies</Link></li>
            <li><Link to="/Login" className="navbarItem">Login</Link></li>
          </ul>
          <Switch>
            <Route exact path="/">
              <div className="youngflix_container">
                <Home movies={movies}/>
              </div>
            </Route>
            <Route exact path="/Movies">
              <MoviesList movies={movies}/>
            </Route>
            <Route exact path="/Login">
              <Login />
            </Route>
          </Switch>
        </BrowserRouter>
        }
      </main>
    )
  }
}

export default App;
