import React, {useState} from "react"
import styled from "styled-components"
import ReactPlayer from "react-player"

const MovieSlideDiv = styled.div`
    width:1080px;
    margin:auto;
    .movieSlideContainer{
        margin:auto;
        width:auto;
        height:500px;
        display:flex;
        position:relative;
        overflow:hidden;
        &img{
            width:100%;
            height:100%;
        }
        .movieDataContainer{
            background-color:transparent;
            position:absolute;
            bottom:0;
            color:#fff;
            &h3 {
                background-color:transparent;
            }
        }
    }
`

const MovieData = styled.div`
    background-image:url(${props => props.backgroundimage});
    width:70%;
`
const Button = styled.button`
    all: unset;
    background-color: red;
    padding: 0.5em 2em;
    color: #fff;
    border-radius: 10px;
    position:relative;
    top:320px;
    border: 2px solid transparent;
    &:hover {
        transition: all 0.3s ease-in-out;
        background-color:#fff;
        border: 2px solid red;
        color: red;
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
        <MovieSlideDiv image={movies[movieId].background_image}>
            <div className="move">
                <Button className="before" onClick={beforeSlide}>&lt;</Button>
                <Button className="after" onClick={afterSlide}>&gt;</Button>
            </div>

            <div className="movieSlideContainer">
                <img src={movies[movieId].medium_cover_image}/>
                <MovieData backgroundimage={movies[movieId].background_image}>
                    <ReactPlayer url={`https://youtu.be/`+movies[movieId].yt_trailer_code} />

                    <div className="movieDataContainer">
                        <h3>{movies[movieId].title}</h3>
                        <h4>{movies[movieId].rating}</h4>
                        <p>{movies[movieId].summary}</p>
                        <button>See More</button>
                    </div>
                </MovieData>
            </div>
        </MovieSlideDiv>
    )
}

export default MovieSlide