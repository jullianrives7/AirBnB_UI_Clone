import { AiOutlineCheckSquare } from "react-icons/all";
import NavBar from "./NavBar";
import Title from "./title";
import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <appContext.Provider value={{}}>
      <div>
        <NavBar />
        <Title />
      </div>
    </appContext.Provider>
  );
}

export const appContext = React.createContext();
export default App;
