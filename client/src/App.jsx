import React, { useEffect, useState } from "react";
import NavBar from "./components/navbar-module/NavBar";
import Title from "./components/title-module/Title";

function App() {
  const ApiUrl = "https://fec-api-server.onrender.com/";
  const contextData = {
    ApiUrl,
  };
  return (
    <appContext.Provider value={{ ...contextData }}>
      <div>
        <NavBar />
        <Title />
      </div>
    </appContext.Provider>
  );
}

export const appContext = React.createContext();
export default App;
