import { render } from "@testing-library/react"
import React, {useState} from "react"
import styled from "styled-components"

const MovieSlideDiv = styled.div`
    width:100%;
    height:50%;
    .movieSlideContainer{
        width:100%;
        height:50%;
        display:flex;
        overflow:hidden;
        .movieData{
            color:#fff;
            vertical-align:bottom;
        }
    }
`
const Button = styled.button`
    all: unset;
    background-color: coral;
    padding: 0.5em 2em;
    color: #fff;
    border-radius: 10px;
    position:relative;
    top:320px;
    &:hover {
        transition: all 0.3s ease-in-out;
        background-color:#fff;
        border: 1px solid coral;
        color: coral;
    }
    &.before{
        position:absolute;
        left:0
    }
    &.after{
        position:absolute;
        right:0
    }
`;
const MovieSlideImg = styled.img`
    width:50%;
    height:50%;
`

function MovieSlide({movies}){
    const [movieId, setMovieId] = useState(0)
    console.log(movies)
    // console.log(movies.length) // 20
    // console.log(movieId) // 0
    const afterSlide = () => {
        if(movieId===movies.length-1){ // 만약 movieId가 movies데이터에서 가장 마지막 데이터 였다면
            setMovieId(0) // 가장 처음으로 돌아오게
        } else {
            setMovieId(movieId + 1)
        }
        console.log(movieId)
    }
    const beforeSlide = () => {
        console.log(movieId)
        if(movieId===0){ // 만약 movieId가 movies데이터에서 가장 첫번째 데이터 였다면
            setMovieId(movies.length-1) //가장 마지막으로 돌아가게
        } else {
            setMovieId(movieId - 1)
        }
        console.log(movieId)
    }

    return(
        <MovieSlideDiv >
            <div className="move">
                <Button className="before" onClick={beforeSlide}>&lt;</Button>
                <Button className="after" onClick={afterSlide}>&gt;</Button>
            </div>

            <div className="movieSlideContainer">
                <MovieSlideImg src={movies[movieId].large_cover_image}/>
                <div className="movieData">
                    <h3>{movies[movieId].title}</h3>
                    <h4>{movies[movieId].rating}</h4>
                    <p>{movies[movieId].summary}</p>
                    <button>See More</button>
                </div>
            </div>
        </MovieSlideDiv>
    )
}

export default MovieSlide