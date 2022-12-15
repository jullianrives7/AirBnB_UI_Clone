import React, { useState, useEffect } from "react";
import NavBar from "./components/navbar-module/NavBar";
import Title from "./components/title-module/Title";
import PhotosModal from "./components/photos-module/PhotoModal";
import Photos from "./components/photos-module/Photos";
import InformationModule from "./components/information-module/informationModule";

function App() {
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const ApiUrl = "https://fec-api-server-lpsg.onrender.com/";

  const contextData = {
    showPhotoModal,
    setShowPhotoModal,
    ApiUrl,
  };

  return (
    <appContext.Provider value={{ ...contextData }}>
      <div className="App">
        {/* <NavBar />
        <Title />
        <Photos />
        <PhotosModal /> */}
        <InformationModule />
      </div>
    </appContext.Provider>
  );
}

export const appContext = React.createContext();
export default App;
