import React from "react";
// import {useNavigate} from "react-router-dom";
import {FullDivinity, LeftDiv, RightDiv} from "./WelcomeText.Styles";


export const WelcomeText = () => {
    return(
        <FullDivinity>
            <LeftDiv>
                <h3>Witamy na serwerze Eternal RP</h3>
                <a>Życzymy miłej zabawy każdemu graczowi</a>
            </LeftDiv>
            <RightDiv>
                <h4>Dołącz do naszej społeczności!</h4>
                <a>Bądź jednym z obywateli naszego miasta i działaj jako porządny obywatel lub kryminalista!</a>
                <h4>RÓŻNE ŚCIEŻKI DOSTĘPNE!</h4>
            </RightDiv>
        </FullDivinity>
    )
}