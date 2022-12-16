import React, { useState, useEffect } from "react";
import NavBar from "./components/navbar-module/NavBar";
import Title from "./components/title-module/Title";
import Photos from "./components/photos-module/Photos";
import Calendar from "./components/calendar-module/Calendar";
import Information from "./components/information-module/Information";
import PhotosModal from "./components/photos-module/PhotoModal";
import axios from "axios";

function App() {
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [rentalData, setRentalData] = useState({});
  const ApiUrl = "https://fec-api-server-lpsg.onrender.com";

  const contextData = {
    showPhotoModal,
    setShowPhotoModal,
    showDropdown,
    setShowDropdown,
    rentalData,
    setRentalData,
    ApiUrl,
    rentalData,
    setRentalData,
  };

  let getRentalDataFromApi = async () => {
    let axiosData = await axios.get(`${ApiUrl}/api/rental/2`);
    setRentalData(axiosData.data);
  };

  useEffect(() => {
    getRentalDataFromApi();
  }, []);

  return (
    <appContext.Provider value={{ ...contextData }}>
      <div className="App">
        <NavBar />
        <div id="main">
          <Title />
          <Photos />
          <Information />
          <Calendar />
        </div>
        <PhotosModal />
      </div>
    </appContext.Provider>
  );
}

export const appContext = React.createContext();
export default App;
