import React from "react"

function MovieInfo({moviedata, setMovieState}){
    const exitMovieInfo = () => {
        setMovieState(false)
    }
    return (
        <div className="movieInfo">
            <img src={moviedata.large_cover_image} alt={moviedata.title} title={moviedata.title}></img>
            <div className="movieInfo__data">
                <h3>{moviedata.title}</h3>
                <h4>{moviedata.year}</h4>
                <ul className="moviesList__genre">
                    {moviedata.genres.map((genre, index)=>{
                        return <li key={index} className="moviesList__genre__item">{genre}</li>
                    })}
                </ul>
                <p>{moviedata.description_full}</p>
            </div>
            <button className="movieInfoClose" onClick={exitMovieInfo}>&times;</button>
        </div>
    )
}

export default MovieInfo