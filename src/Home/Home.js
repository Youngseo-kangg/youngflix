import React from "react"
import MovieItems from "./MovieItems"
import MovieSlide from "./MovieSlide"

function Home({movies}){
    return (
        <div className="youngflix_movie">
            <MovieSlide movies={movies.slice(0,9)}/>

            <h2 className="youngflix_moviesList_title">이번주의 영화 추천</h2>
            <MovieItems key={movies.id} movies={movies}/>
        </div>
    )
}

export default Home;