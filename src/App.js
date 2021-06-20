import React from 'react'
import axios from "axios"
import Movie from "./Movie"
import MovieSlide from "./MovieSlide"
import"./App.css"

class App extends React.Component{
  state = {
    isLoading:true,
    movies : []
  }
  getMovies = async () => {
    const {data : {data : {movies}}} = await axios.get("http://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating")
    this.setState({ movies , isLoading:false })
  }
  componentDidMount(){
    this.getMovies()
  }
  render(){
    const { isLoading, movies } = this.state
    return (
      <section className="container">
        <h1>Youngflix</h1>
        {isLoading ?
        <div className="loader">
          <span className="loader__text">Loading...</span>
        </div>
        : 
        <div className="youngflix_movie">
          <MovieSlide movies={movies.slice(0,5)}/>
          <h2>이번주의 영화 추천</h2>
          <div className="movie__list">
            {movies.map((movie)=>{
              return <Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} genres={movie.genres} />
            })}
          </div>
        </div>}
      </section>
    )
  }
}

export default App;
