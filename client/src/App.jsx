import React, { useState, useEffect, useRef } from "react";
//------------------------------ MODULES ----------------------------------//
import LoadingScreen from "./components/loading-screen-module/LoadingScreen";
import NavBar from "./components/navbar-module/NavBar";
import NavBarSecondary from "./components/navbar-module/NavBarSecondary";
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
import PhotosModal from "./components/photos-module/PhotoModal";
import PhotoSlideModal from "./components/photos-module/PhotoSlideModal";
import InformationDescModal from "./components/information-module/information-description/InformationDescModal";
import LoginModal from "./components/host-module/LoginModal";
import AirCoverModal from "./components/information-module/information-aircover/InformationAirCoverModal";
import axios from "axios";

function App() {
  const [loading, setLoading] = useState(true);
  const [toggleNav, setToggleNav] = useState(false);
  const [hostData, setHostData] = useState({});
  const [rentalData, setRentalData] = useState({});
  const [photosData, setPhotosData] = useState({});
  const [reviewsData, setReviewsData] = useState({});
  const [showDropdown, setShowDropdown] = useState(false);
  const [showLogInModal, setShowLogInModal] = useState(false);
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const [showPhotoSlideModal, setShowPhotoSlideModal] = useState(false);
  const [showAirCoverModal, setShowAirCoverModal] = useState(false);
  const [showInformationDescModal, setShowInformationDescModal] =
    useState(false);
//   const ApiUrl = "https://fec-api-server-lpsg.onrender.com";
  const ApiUrl = "https://airbnb-ui-clone-api-server.onrender.com"
  const ref = useRef(null);

  const contextData = {
    loading,
    setLoading,
    toggleNav,
    setToggleNav,
    hostData,
    setHostData,
    rentalData,
    setRentalData,
    photosData,
    setPhotosData,
    reviewsData,
    setReviewsData,
    showLogInModal,
    setShowLogInModal,
    showPhotoModal,
    setShowPhotoModal,
    showPhotoSlideModal,
    setShowPhotoSlideModal,
    showDropdown,
    setShowDropdown,
    ApiUrl,
    showAirCoverModal,
    setShowAirCoverModal,
    showInformationDescModal,
    setShowInformationDescModal,
    ref,
  };

  let getAllDataFromApi = async () => {
    let axiosHostData = await axios.get(`${ApiUrl}/api/host/1`);
    setHostData(axiosHostData.data);
    let axiosRentalData = await axios.get(`${ApiUrl}/api/rental/1`);
    setRentalData(axiosRentalData.data);
    let axiosPhotosData = await axios.get(`${ApiUrl}/api/all_photos`);
    setPhotosData(axiosPhotosData.data);
    let axiosReviewsData = await axios.get(`${ApiUrl}/api/all_reviews`);
    setReviewsData(axiosReviewsData.data);
    setLoading(false);
  };

  useEffect(() => {
    getAllDataFromApi();
  }, []);

  document.addEventListener("scroll", () => {
    if (window.pageYOffset < 680) {
      setToggleNav(false);
    } else if (window.pageYOffset >= 680) {
      setToggleNav(true);
    }
  });

  console.log("hostData: ", hostData);
  console.log("rentalData: ", rentalData);
  console.log("photosData: ", photosData);
  console.log("reviewsData: ", reviewsData);
  console.log("loading: ", loading);
  console.log("toggleNav: ", toggleNav);

  return (
    <appContext.Provider value={{ ...contextData }}>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div className="App">
          <NavBar />
          {toggleNav && <NavBarSecondary />}
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
          <PhotosModal />
          {/* <PhotoSlideModal /> */}
          <LoginModal />
          <AirCoverModal />
          <InformationDescModal />
        </div>
      )}
    </appContext.Provider>
  );
}

export const appContext = React.createContext();
export default App;
