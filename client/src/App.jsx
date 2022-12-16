import React, { useState, useEffect } from "react";
import NavBar from "./components/navbar-module/NavBar";
import Title from "./components/title-module/Title";
import PhotosModal from "./components/photos-module/PhotoModal";
import Photos from "./components/photos-module/Photos";

function App() {
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const [rentalData,setRentalData]=useState({});
  const ApiUrl = "https://fec-api-server-lpsg.onrender.com";
  
  const contextData = {
    rentalData,
    setRentalData,
    showPhotoModal,
    setShowPhotoModal,
    ApiUrl
  };  


  useEffect(()=>{
    fetch(`${ApiUrl}/api/rental/2`)
        .then(response => response.json())
        .then(data => {
          setRentalData(data);
        })
       
},[]);
console.log(rentalData.photo)

  return (
    <appContext.Provider value={{ ...contextData }}>
      <div className="App">
        <NavBar />
        <Title />
        <Photos />
        <PhotosModal />
      </div>
    </appContext.Provider>
  );
}

export const appContext = React.createContext();
export default App;
