import React, { useState, useEffect } from "react";
import NavBar from "./components/navbar-module/NavBar";
import Title from "./components/title-module/Title";
import Photos from "./components/photos-module/Photos";
import InformationModule from "./components/information-module/InformationModule";
import Reservation from "./components/reservation-module/Reservation";
import Reviews from "./components/reviews-module/Reviews";
import PhotosModal from "./components/photos-module/PhotoModal";
import AirCoverModal from "./components/information-module/information-aircover/InformationAirCoverModal";
import InformationDescModal from "./components/information-module/information-description/InformationDescModal";
import axios from "axios";

function App() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const [showAirCoverModal, setShowAirCoverModal] = useState(false);
  const [showInformationDescModal, setShowInformationDescModal] =
    useState(false);
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
    showAirCoverModal,
    setShowAirCoverModal,
    showInformationDescModal,
    setShowInformationDescModal,
  };

  let getRentalDataFromApi = async () => {
    let axiosData = await axios.get(`${ApiUrl}/api/rental/2`);
    setRentalData(axiosData.data);
  };

  useEffect(() => {
    getRentalDataFromApi();
  }, []);
  console.log(rentalData);

  return (
    <appContext.Provider value={{ ...contextData }}>
      <div className="App">
        <NavBar />
        <div id="main">
          <Title />
          <Photos />
          <div id="flex-row-1">
            <InformationModule />
            <div style={{ width: "9%" }}></div>
            <Reservation />
          </div>
          <Reviews />
        </div>
        <PhotosModal />
        <AirCoverModal />
        <InformationDescModal />
      </div>
    </appContext.Provider>
  );
}

export const appContext = React.createContext();
export default App;
