import styled from "styled-components";

export const Wrapper = styled.nav`
  position: fixed;
  top:0;
  left:0;
  width:100%;
  padding: 20px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index:99;
  overflow: hidden;
`

export const Navigation = styled.div`
    position:relative;
    font-size: 1.1em;
    color:#fff;
    text-decoration: none;
    text-weight: 500;
    margin-left: 40px;
  
  a::after{
    content:'';
    position:absolute;
    left:0;
    bottom: -6px;
    width:100%;
    height:3px;
    background: #fff;
    border-radius: 5px;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform .5s;
  }

  a:hover::after{
    transform-origin: left;
    transform: scaleX(1);

  }
`



export const LoginButton = styled.button`
  width: 130px;
  height: 50px;
  background: transparent;
  border: 2px solid #fff;
  outline:none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1.1em;
  color:#fff;
  font-weight: 500;
  margin-left:40px;
  transition: .5s;
`


export const ImgLogo = styled.img`
    width:23%;
    height:23%;
    
`

export const Link = styled.a`
    
`

export const PageTitle = styled.h3`
    
`

export const LogginWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 20%;
  left: 37.5%;
  width: 25%;
  height: 60%;
  border: 2px solid purple;
  border-radius: 20px;
  background: transparent;
  z-index: 999;
  backdrop-filter: blur(20px);
  box-shadow: 0 0 30px rgba(181, 29, 220, 0.92)
  //--------------------------------
  //position: absolute;
  //top:200px;
  //right:40%;
  //width:400px;
  //height:460px;
  //background: transparent;
  //border: 2px solid rgba(84, 166, 204, 0.92);
  //border-radius: 20px;
  //backdrop-filter: blur(20px);
  //color:white;
  //box-shadow: 0 0 30px rgba(84, 166, 204, 0.92);
  //display:flex;
  //justify-content: center;
  //align-items: center;
  //overflow: hidden;
  //transform: scale(0);
  //transition: transform .5s ease, height .2s ease;

`

export const StyledTextFieldMedium = styled.input`
  width: 30%;
  height: 5%;
`

export const StyledLoginButton = styled.button`
  width: 15%;
  height: 5%;
  color:black;
  background-color: purple;
`



export const StyledSwitchButton = styled.button`
  width: 15%;
  height: 5%;
  color:black;
  background-color: lightcoral;
`


export const RegisterWrapper = styled.div`
      display: flex;
      position: absolute;
      top:20%;
      left: 37.5%;
      width:25%;
      height:60%;
      border:2px solid lightcoral;
      border-radius:20px;
      background:transparent;
      z-index:999;
      backdrop-filter: blur(20px);
`
