import React from "react"

function MainMovieInfo({ mainMovieInfo, setShowMovieInfo }){
    const exitMovieInfo = () => {
        setShowMovieInfo(false)
    }
    return(
        <div className="movieInfo">
            <img src={mainMovieInfo.large_cover_image} alt={mainMovieInfo.title} title={mainMovieInfo.title}></img>
            <div className="movieInfo__data">
                <h3>{mainMovieInfo.title}</h3>
                <h4>{mainMovieInfo.year}</h4>
                <ul className="moviesList__genre">
                    {mainMovieInfo.genres.map((genre, index)=>{
                        return <li key={index} className="moviesList__genre__item">{genre}</li>
                    })}
                </ul>
                <p>{mainMovieInfo.description_full}</p>
            </div>
            <button className="movieInfoClose" onClick={exitMovieInfo}>&times;</button>
        </div>
    )
}

export default MainMovieInfo