import React, {useCallback, useContext, useEffect, useState} from "react";
import {
    Wrapper,
    LoginButton,
    ImgLogo,
    Link,
    PageTitle,
    LogginWrapper,
    StyledTextFieldMedium,
    StyledLoginButton,
    RegisterWrapper,
    StyledSwitchButton,
    Navigation
} from "./Navbar.styles";
import {useNavigate} from "react-router-dom";
import {LoginContext} from "../../context/LoginContext";
import {AuthApi} from "../../api/AuthApi";


export const Navbar = () => {
    const [userPassword,setUserPassword] = useState("")
    const [userName,setUserName] = useState("");
    const navigate = useNavigate()
    // @ts-ignore
    const {showLogin,loginModifier,registerModifier,showRegister} = useContext(LoginContext)
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
    const onRegisterClicked = useCallback(async ()=>{
        try {
            const userResponse = await AuthApi.signUp(
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
                    <PageTitle style={{color:"white"}}>Eternal RP</PageTitle>
                </div>
                <Navigation>
                    <Link onClick={()=>{navigate("/")}}>Home</Link>
                    <Link onClick={()=>{navigate("/post")}}>Posts</Link>
                    <Link onClick={()=>{navigate("/contact")}}>Contact Us</Link>
                    <LoginButton onClick={()=>{loginModifier(true)}}>Login</LoginButton>
                </Navigation>
            </Wrapper>
            {showRegister && (
                <RegisterWrapper>
                    <>
                        <label>Username:</label>
                        <StyledTextFieldMedium onChange={(event)=>setUserName(event.target.value)}/>
                        <label>Password:</label>
                        <StyledTextFieldMedium onChange={(event)=>setUserPassword(event.target.value)}/>
                        <StyledSwitchButton onClick={onRegisterClicked}>
                            Zarejestruj się
                        </StyledSwitchButton>
                        <StyledLoginButton onClick={()=>{registerModifier(false);loginModifier(true) }}>
                            Logowanie
                        </StyledLoginButton>

                    </>
                </RegisterWrapper>
            )
            }
            {showLogin && (
                <LogginWrapper>
                    <>
                        <StyledTextFieldMedium onChange={(event)=>setUserName(event.target.value)}/>
                        <StyledTextFieldMedium onChange={(event)=>setUserPassword(event.target.value)}/>
                    </>
                    <StyledLoginButton onClick={onLoginClicked}>
                        Zaloguj się
                    </StyledLoginButton>
                    <StyledSwitchButton onClick={()=>{registerModifier(true);loginModifier(false) }}>
                        Rejestracja
                    </StyledSwitchButton>


                </LogginWrapper>
            )
            }
        </>
    )
}