import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";

function App() {
  const ApiUrl = "https://fec-api-server.onrender.com/";
  const contextData = {
    ApiUrl,
  };
  return (
    <appContext.Provider value={{ ...contextData }}>
      <div>
        <NavBar />
      </div>
    </appContext.Provider>
  );
}

export const appContext = React.createContext();
export default App;
