import React from 'react';
import './App.css';
import {AppRoute} from "./router/App.Router";
import {LoginContextProvider} from "./context/LoginContext";
import {withAxiosIntercepted} from "./hooks/withAxiosIntercepted";

function App() {
  return (
      <LoginContextProvider>
        <AppRoute/>
      </LoginContextProvider>
  );
}

export default withAxiosIntercepted(App);

