import React from "react"
import MovieItems from "./MovieItems"
import MovieSlide from "./MovieSlide"

function Home({movies}){
    return (
        <div className="youngflix_movie">
            <MovieSlide movies={movies.slice(0,5)}/>
            <h2>이번주의 영화 추천</h2>
            <div className="movie__list">
                {movies.map((movie)=>{
                    return <MovieItems key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} genres={movie.genres} />
                })}
            </div>
        </div>
    )
}

export default Home;