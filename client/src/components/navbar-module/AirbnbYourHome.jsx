const AirbnbYourHome = () => {
  const handleClick = () => {
    window.location.assign("https://www.airbnb.com/host/homes");
  };
  return (
    <div id="airbnb-your-home" onClick={handleClick}>
      Airbnb your home
    </div>
  );
};

export default AirbnbYourHome;
