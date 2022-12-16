import React, { useState, useEffect } from "react";
import NavBar from "./components/navbar-module/NavBar";
import Title from "./components/title-module/Title";
import PhotosModal from "./components/photos-module/PhotoModal";
import Photos from "./components/photos-module/Photos";
import InformationModule from "./components/information-module/informationModule";

function App() {
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const [rentalData, setRentalData] = useState({});
  const ApiUrl = "https://fec-api-server-lpsg.onrender.com/";

  const contextData = {
    showPhotoModal,
    setShowPhotoModal,
    ApiUrl,
    rentalData,
    setRentalData
  };
    let getRentalDataFromApi = async () => {
    fetch(`${ApiUrl}api/rental/2`)
    .then(response => response.json())
    .then((data) => setRentalData(data))
  }
 

  useEffect(()=> {
    getRentalDataFromApi();
  }, []);
  console.log(rentalData)

  

  return (
    <appContext.Provider value={{ ...contextData }}>
      <div className="App">

        <InformationModule />
      </div>
    </appContext.Provider>
  );
}

export const appContext = React.createContext();
export default App;
