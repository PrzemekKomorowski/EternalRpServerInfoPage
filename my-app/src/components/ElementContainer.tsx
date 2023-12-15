import React from "react";
import {Navbar} from "./navbar/Navbar";
import {Outlet} from "react-router-dom";



export const ElementContainer=() => {
    return(
        <>
            <Navbar/>
            <Outlet/>
        </>
    );
}