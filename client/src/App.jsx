import React, { useState, useEffect } from "react";
import NavBar from "./components/navbar-module/NavBar";
import Title from "./components/title-module/Title";
import Photos from "./components/photos-module/Photos";
import Calendar from "./components/reservation-module/MiniCalendar";
import Information from "./components/information-module/Information";
import PhotosModal from "./components/photos-module/PhotoModal";
import axios from "axios";
import Reservation from "./components/reservation-module/Reservation";
import InformationModule from "./components/information-module/informationModule";
import AirCoverModal from "./components/information-module/informationAirCover/informationAirCoverModal";
import InformationDescModal from "./components/information-module/informationDescription/informationDescModal";

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
