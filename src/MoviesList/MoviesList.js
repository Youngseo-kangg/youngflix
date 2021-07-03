import React, {useState} from "react"
import MovieInfo from "./MovieInfo"
import "./MoviesList.css"

function MoviesList({movies}){
    const [movieState, setMovieState] = useState(false)
    const [moviedata, setMoviedata] = useState(movies[0])
    const movieStateChange = (index) => {
        setMoviedata(movies[index]) // moviedata 변경하기
        setMovieState(true) // movieState 변경해주기
    }
    return(
        <div className="movieContainer">
            {movieState?
            <MovieInfo moviedata={moviedata} setMovieState={setMovieState} />
            :
            <div className="moviesListSlide">
                {movies.map((movie,index)=>{
                    return (
                        <div className="moviesList__data" onClick={()=>movieStateChange(index)}> 
                            <img className="moviesList__poster" src={movie.medium_cover_image} alt={movie.title} title={movie.title}></img>
                            <h3 className="moviesList__title">{movie.title}</h3>
                            <h4 className="moviesList__year">{movie.year}</h4>
                            <ul className="moviesList__genre">
                                {movie.genres.map((genre, index)=>{
                                    return <li key={index} className="moviesList__genre__item">{genre}</li>
                                })}
                            </ul>
                        </div>
                    )
                })}
            </div>}
        </div>
    )
}

export default MoviesList