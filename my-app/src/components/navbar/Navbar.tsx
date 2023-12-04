import React, {useCallback, useContext, useEffect, useState} from "react";
import {
    Wrapper,
    LoginButton,
    ImgLogo,
    Link,
    PageTitle,
    LogginWrapper,
    StyledTextFieldMedium,
    StyledLoginButton
} from "./Navbar.styles";
import {useNavigate} from "react-router-dom";
import {LoginContext} from "../../context/LoginContext";
import {AuthApi} from "../../api/AuthApi";


export const Navbar = () => {
    const [userPassword,setUserPassword] = useState("")
    const [userName,setUserName] = useState("");
    const navigate = useNavigate()
    const {showLogin,loginModifier} = useContext(LoginContext)
    const onLoginClicked = useCallback(async ()=>{
        try {
            const userResponse = await AuthApi.signIn(
                {
                    userName:userName,
                    password:userPassword
                }
            )
            console.log(userResponse.data)
        }catch (error){
            console.log(error)
        }
    },[userName,userPassword])
    return (
        <>
            <Wrapper>
                <div style={{display:"flex",flexDirection:"row"}}>
                    <ImgLogo src={require("../../resources/eternalRpLogo.png")}/>
                    <PageTitle>Eternal RP</PageTitle>
                </div>
                <Link onClick={()=>{navigate("/")}}>Home</Link>
                <Link onClick={()=>{navigate("/post")}}>Posts</Link>
                <Link onClick={()=>{navigate("/contact")}}>Contact Us</Link>
                <LoginButton onClick={()=>{loginModifier(true)}}>Login</LoginButton>
            </Wrapper>
            {showLogin && (
                <LogginWrapper>
                    <>
                        <StyledTextFieldMedium onChange={(event)=>setUserName(event.target.value)}/>
                        <StyledTextFieldMedium onChange={(event)=>setUserPassword(event.target.value)}/>
                    </>
                    <StyledLoginButton onClick={onLoginClicked}>
                        Logowanie
                    </StyledLoginButton>

                </LogginWrapper>
            )
            }
        </>
    )
}