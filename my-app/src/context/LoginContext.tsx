import {LoginContextType} from "../models/context/Login.Context.Type";
import React, {createContext, useState} from "react";

const defaultSettings: LoginContextType = {
    showLogin:false,
    loginModifier:(shows:boolean) => {},
    showRegister:false,
    registerModifier:(shows:boolean) => {},
}
export const LoginContext = createContext<LoginContextType>(defaultSettings);
export const LoginContextProvider = ({children}:React.PropsWithChildren) => {
    const [showLogin,setShowLogin] = useState(false);
    const [showRegister,setShowRegister] = useState(false);
    const loginModifier = (show:boolean) => {
        setShowLogin(show)
    }

    function registerModifier(show:boolean) {
        setShowRegister(show)
    }

    return(
        <LoginContext.Provider value={{showLogin,loginModifier,showRegister,registerModifier}}>
            {children}
        </LoginContext.Provider>
    )
}