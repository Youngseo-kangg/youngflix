import React, {useState} from "react"
import LoadingIndicator from "../LoadingIndicator/LoadingIndicator"
import "./MoviesList.css"

function MoviesList({movies}){
    const [movieState, setMovieState] = useState(false)
    const [Moviedata, setMoviedata] = useState(movies[0])
    const movieStateChange = (index) => {
        setMoviedata(movies[index]) // moviedata 변경하기
        setMovieState(true) // movieState 변경해주기
    }
    const exitMovieInfo = () => {
        setMovieState(false)
    }
    return(
        <div>
            {movieState?
            <div className="movieInfo">
                <img src={Moviedata.large_cover_image} alt={Moviedata.title} title={Moviedata.title}></img>
                <div className="movieInfo__data">
                    <h3>{Moviedata.title}</h3>
                    <h4>{Moviedata.year}</h4>
                    <ul className="moviesList__genre">
                        {Moviedata.genres.map((genre, index)=>{
                            return <li key={index} className="moviesList__genre__item">{genre}</li>
                        })}
                    </ul>
                    <p>{Moviedata.description_full}</p>
                </div>
                <button onClick={exitMovieInfo}>close</button>
            </div>
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