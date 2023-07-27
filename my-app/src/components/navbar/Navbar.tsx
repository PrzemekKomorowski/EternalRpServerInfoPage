import React, {useContext, useEffect, useState} from "react";
import{Wrapper,LoginButton,ImgLogo,Link,PageTitle,LogginWrapper} from "./Navbar.styles";
import {useNavigate} from "react-router-dom";
import {LoginContext} from "../../context/LoginContext";


export const Navbar = () => {
    const navigate = useNavigate()
    const {showLogin,loginModifier} = useContext(LoginContext)
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

                </LogginWrapper>
            )
            }
        </>
    )
}