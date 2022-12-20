import React, { useState, useEffect } from "react";
//------------------------------ MODULES ----------------------------------//
import NavBar from "./components/navbar-module/NavBar";
import Title from "./components/title-module/Title";
import Photos from "./components/photos-module/Photos";
import Information from "./components/information-module/Information";
import Reservation from "./components/reservation-module/Reservation";
import Reviews from "./components/reviews-module/Reviews";
import Location from "./components/location-module/Location";
import Host from "./components/host-module/Host";
import Things from "./components/things-to-know-module/Things";
import SiteDirectory from "./components/site-directory-module/SiteDirectory";
import Footer from "./components/footer-module/footer";
//------------------------------ MODALS -----------------------------------//
import InformationDescModal from "./components/information-module/information-description/InformationDescModal";
import PhotoSlide from "./components/photos-module/PhotoSlide";
import LoginModal from "./components/host-module/LoginModal";
import PhotosModal from "./components/photos-module/PhotoModal";
import AirCoverModal from "./components/information-module/information-aircover/InformationAirCoverModal";
import axios from "axios";

function App() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showLogInModal, setShowLogInModal] = useState(false);
  const [photoSlide, setPhotoSlide] = useState(false);
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const [showAirCoverModal, setShowAirCoverModal] = useState(false);
  const [showInformationDescModal, setShowInformationDescModal] =
    useState(false);
  const [rentalData, setRentalData] = useState({});
  const ApiUrl = "https://fec-api-server-lpsg.onrender.com";

  const contextData = {
    showLogInModal,
    setShowLogInModal,
    photoSlide,
    setPhotoSlide,
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
            <Information />
            <div style={{ width: "8%" }}></div>
            <Reservation />
          </div>
          <Reviews />
          <Location />
          <Host />
          <Things />
        </div>
        <SiteDirectory />
        <Footer />
        {/* MODALS */}
        <PhotoSlide />
        <PhotosModal />
        <LoginModal />
        <AirCoverModal />
        <InformationDescModal />
      </div>
    </appContext.Provider>
  );
}

export const appContext = React.createContext();
export default App;
