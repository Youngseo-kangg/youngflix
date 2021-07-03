import React, {useEffect, useState} from "react"
import styled from "styled-components"

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
            padding:179px 20px;
            box-sizing:border-box;
            color:#fff;
            &>*{background-color:transparent}
            &>h3{
                font-size:2rem;
                margin-bottom:12px;
            }
            &>h4,p{margin-bottom:10px}
            &>button{
                border:2px solid #fff;
                padding:0.5rem 1rem;
                color:#fff;
                transition:all 0.2s;
            } 
            &>button:hover{
                border:2px solid red;
                color:red;
                cursor:pointer;
            }
        }
    }
`

const MovieData = styled.div`
    background-image:url(${props => props.backgroundimage});
    width:70%;
`

function MovieSlide({ movie, setShowMovieInfo, setMainMovieInfo }){
    const findMeInfo = () => {
        setShowMovieInfo(true)
        setMainMovieInfo(movie)
    }
    return(
        <MovieSlideDiv>
            <div className="movieSlideContainer">
                <img src={movie.medium_cover_image}/>
                <MovieData backgroundimage={movie.background_image}>
                    <div className="movieDataContainer">
                        <h3>{movie.title}</h3>
                        <h4>{movie.rating}</h4>
                        <p>{movie.summary.slice(0,140)}...</p>
                        <button onClick={()=>findMeInfo()}>See More</button>
                    </div>
                </MovieData>
            </div>
        </MovieSlideDiv>
    )
}

export default MovieSlide