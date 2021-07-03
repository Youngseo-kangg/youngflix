import React, {useState} from "react"
import MovieItems from "./MovieItems"
import MovieSlide from "./MovieSlide"
import MainMovieInfo from "./MainMovieInfo"

function Home({movies}){
    const [mainMovieInfo, setMainMovieInfo] = useState(movies[0])
    const [showMovieInfo, setShowMovieInfo] = useState(false)

    return (
        <div className="youngflix_movie">
            {showMovieInfo?
            <MainMovieInfo mainMovieInfo={mainMovieInfo} setShowMovieInfo={setShowMovieInfo}/>
            :
            <div className="movieContainer">
                <MovieSlide 
                movie={movies[0]} 
                setShowMovieInfo={setShowMovieInfo}
                setMainMovieInfo={setMainMovieInfo}
                />
                <h2 className="youngflix_moviesList_title">이번주의 영화 추천</h2>
                <MovieItems 
                key={movies.id} 
                movies={movies}
                setShowMovieInfo={setShowMovieInfo}
                setMainMovieInfo={setMainMovieInfo}
                />
            </div>
            }
        </div>
    )
}

export default Home;