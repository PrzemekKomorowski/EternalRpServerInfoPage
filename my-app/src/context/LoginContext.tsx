import {LoginContextType} from "../models/context/Login.Context.Type";
import React, {createContext, useState} from "react";

const defaultSettings: LoginContextType = {
    showLogin:false,
    loginModifier:(shows:boolean) => {}
}
export const LoginContext = createContext<LoginContextType>(defaultSettings);
export const LoginContextProvider = ({children}:React.PropsWithChildren) => {
    const [showLogin,setShowLogin] = useState(false);
    const loginModifier = (show:boolean) => {
        setShowLogin(show)
    }
    return(
        <LoginContext.Provider value={{showLogin,loginModifier}}>
            {children}
        </LoginContext.Provider>
    )
}