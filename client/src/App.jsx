import React, { useEffect, useState } from "react";
import NavBar from "./componets/NavBar";

function App() {





  return (
    <appContext.Provider value={{}}>
      <div>
        <NavBar />
      </div>
    </appContext.Provider>
  );
}

export const appContext = React.createContext();
export default App;
