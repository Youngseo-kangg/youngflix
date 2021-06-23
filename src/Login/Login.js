import React from "react"
import styled from "styled-components"

const LoginContainer = styled.div`
    border:1px solid #fff;
    width:30%;
    height:80vh;
    margin:auto;
`
const Loginform = styled.form`
    display:flex;
    flex-direction:column;
    input{
        display:block;
        border:none;
        padding:20px 0px;
    }
    button{
        color:#fff;
        padding:20px 0px;
        font-size:1.1em;
        border:none;
    }
`

function Login(){
    return (
        <LoginContainer>
            <Loginform>
                <input type="text" placeholder="ID"></input>
                <input type="text" placeholder="password"></input>
                <button>Login</button>
            </Loginform>
        </LoginContainer>
    )
}

export default Login