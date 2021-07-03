import React, {useState, useEffect} from "react"
import "./MovieItems.css"

function MovieItems({movies, setShowMovieInfo, setMainMovieInfo}){
    const [slideIdx, setSlideIdx] = useState(1) // (1~18까지 괜찮음)
    const moveLeft = () => {
        if(slideIdx===0){
            setSlideIdx(16)
        } else {
            setSlideIdx(slideIdx-1) 
        }
    }
    const moveRight = () => {
        if(slideIdx===16){
            setSlideIdx(0)
        } else {
            setSlideIdx(slideIdx+1) 
        }
    }
    const styleChange = () => {
        let moviesListSlide = document.querySelector(".youngflix_movie .moviesListSlide")
        moviesListSlide.style.left = (-slideIdx * 270) + 'px'
    }
    useEffect(()=>{
        styleChange()
    },[slideIdx])

    const findMeInfo = (idx) => {
        setShowMovieInfo(true)
        setMainMovieInfo(movies[idx])
    }

    return(
        <div className="moviesList">
            <div className="move">
                <button className="before" onClick={moveLeft}>&lt;</button>
                <button className="after" onClick={moveRight}>&gt;</button>
            </div>

            <div className="moviesListSlide">
                {movies.map((movie,idx)=>{
                    return (
                        <div className="moviesList__data" onClick={()=>findMeInfo(idx)}>
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
            </div>
        </div>
    )
}

export default MovieItems