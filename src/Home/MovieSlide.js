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
                border:1px solid #fff;
                padding:0.5rem 1rem;
                color:#fff;
            }
        }
    }
`

const MovieData = styled.div`
    background-image:url(${props => props.backgroundimage});
    width:70%;
`

function MovieSlide({movies}){
    const randomNum = Math.floor(Math.random()*10)
    const [idx,setIdx] = useState(randomNum)

    return(
        <MovieSlideDiv>
            <div className="movieSlideContainer">
                <img src={movies[idx].medium_cover_image}/>
                <MovieData backgroundimage={movies[idx].background_image}>
                    <div className="movieDataContainer">
                        <h3>{movies[idx].title}</h3>
                        <h4>{movies[idx].rating}</h4>
                        <p>{movies[idx].summary.slice(0,140)}...</p>
                        <button>See More</button>
                    </div>
                </MovieData>
            </div>
        </MovieSlideDiv>
    )
}

export default MovieSlide