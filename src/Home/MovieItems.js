import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const MovieItem = styled.div`
    .movie__mainTitle{
        text-align:center;
    }

    .movie__genre{
        list-style:none;
        padding:0;
        margin:0;
    }
    .movie__genre__item{
        display:inline-block;
        border: 1px solid #fff;
        padding: 3px;
        margin-right:5px;
        margin-bottom: 5px
    }
`

function MovieItems ({year, title, summary, poster, genres}){
    // img onclick -> module 창에 포스터 이미지 + 정보 다 뜨고 싶음
    // img hover -> img 크게 나타나기
    return (
        <MovieItem>
            <img className="movie__poster" src={poster} alt={title} title={title}></img>
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <ul className="movie__genre">
                    {genres.map((genre, index)=>{
                        return <li key={index} className="movie__genre__item">{genre}</li>
                    })}
                </ul>
                <h5 className="movie__year">{year}</h5>
                <p className="movie__summary">{summary.slice(0,140)}...</p>
            </div>
        </MovieItem>
    )
}

MovieItems.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default MovieItems;