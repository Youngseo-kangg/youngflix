import React from "react"
import styled from "styled-components"

const LoginContainer = styled.div`
    border:1px solid #fff;
    width:350px;
    height:60vh;
    padding:166px 0px;
    margin:100px auto;
`
const Loginform = styled.form`
    display:flex;
    flex-direction:column;
    input{
        display:block;
        width:90%;
        margin:auto;
        border:none;
        border-bottom:1px solid #fff;
        padding:20px 0px;
    }
    button{
        color:#fff;
        padding:20px 0px;
        font-size:1.1em;
        border:none;
        border-bottom:1px solid transparent;
        width:50%;
        margin:auto;
        transition:all 0.2s;
        cursor:pointer;
    }
    button:hover{
        color:red;
        border-bottom:1px solid red;
    }
`

function Login(){
    return (
        <LoginContainer>
            <Loginform>
                <input type="text" placeholder="ID"></input>
                <input type="text" placeholder="password"></input>
                <button>Login</button>
                <button>Signup</button>
            </Loginform>
        </LoginContainer>
    )
}

export default Login