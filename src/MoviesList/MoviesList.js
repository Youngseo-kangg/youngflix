import React from "react"

function MoviesList({movies}){
    return(
        <div>
            {movies.map((movie)=>{
                return (
                    <div className="movie__data">
                        <img className="movie__poster" src={movie.poster} alt={movie.title} title={movie.title}></img>
                        <h3 className="movie__title">{movie.title}</h3>
                        <ul className="movie__genre">
                        </ul>
                        <h5 className="movie__year">{movie.year}</h5>
                        <p className="movie__summary">{movie.summary.slice(0,140)}...</p>
                    </div>
                )
            })}
        </div>
    )
}

export default MoviesList