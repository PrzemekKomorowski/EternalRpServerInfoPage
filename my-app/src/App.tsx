import React from 'react';
import './App.css';
import {AppRoute} from "./router/App.Router";
import {LoginContextProvider} from "./context/LoginContext";

function App() {
  return (
      <LoginContextProvider>
        <AppRoute/>
      </LoginContextProvider>
  );
}

export default App;

