import React from "react"
import {useFormik} from "formik"
import styled from "styled-components"

const LoginContainer = styled.div`
    border:1px solid #fff;
    width:350px;
    height:60vh;
    padding:150px 0px;
    margin:100px auto;
`
const Loginform = styled.form`
    display:flex;
    flex-direction:column;
    >input{
        display:block;
        width:90%;
        margin:auto;
        margin-bottom:15px;
        border:none;
        outline:none;
        color:#fff;
        border-bottom:1px solid #fff;
        padding:20px 0px;
    }
    >button{
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
    >button:hover{
        color:red;
        border-bottom:1px solid red;
    }
    >span{
        color:red;
        padding-left:15px;
    }
`

const validate = values => {
    const errors = {};
    if (!values.uid) {
        errors.uid = 'id 입력이 필요합니다.';
    } else if (values.uid.length > 15) {
        errors.uid = 'Must be 15 characters or less';
    }

    if (!values.password) {
        errors.password = '비밀번호 입력이 필요합니다.';
    } else if (values.password.length > 20) {
        errors.password = 'Must be 20 characters or less';
    }
    return errors;
};

function Login(){
    const formik = useFormik({
        initialValues:{
            uid: "",
            password:""
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2))
        }
    })
    return (
        <LoginContainer>
            <Loginform onSubmit={formik.handleSubmit}>
                <input type="text" name="uid" id="uid" onChange={formik.handleChange} value={formik.values.uid} placeholder="ID"></input>
                {formik.errors.uid ? <span class="validId">{formik.errors.uid}</span> : null}
                <input type="password" name="password" id="password" onChange={formik.handleChange} value={formik.values.password} placeholder="password"></input>
                {formik.errors.password ? <span class="validPwd">{formik.errors.password}</span> : null}
                <button type="submit">Login</button>
                <button>Signup</button>
            </Loginform>
        </LoginContainer>
    )
}

export default Login