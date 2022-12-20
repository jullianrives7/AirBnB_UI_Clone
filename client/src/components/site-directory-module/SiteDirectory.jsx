const SiteDirectory = () => {
  return (
    <>
      <div className="SiteDirectory">
        <div className="support">
          <b>Support</b>
          <div
            className="linkStyling"
            onClick={() => {
              window.location.assign("https://www.airbnb.com/help/");
            }}
          >
            <span className="hoverEffectStyling">Help Center</span>
          </div>
          <div
            className="linkStyling"
            onClick={() => {
              window.location.assign("https://www.airbnb.com/aircover");
            }}
          >
            <span className="hoverEffectStyling">AirCover</span>
          </div>
          <div
            className="linkStyling"
            onClick={() => {
              window.location.assign("https://www.airbnb.com/accessibility");
            }}
          >
            <span className="hoverEffectStyling">
              Supporting people with disabilities
            </span>
          </div>
          <div
            className="linkStyling"
            onClick={() => {
              window.location.assign(
                "https://www.airbnb.com/help/article/2701/extenuating-circumstances-policy-and-the-coronavirus-covid19"
              );
            }}
          >
            <span className="hoverEffectStyling">Cancellation options</span>
          </div>
          <div
            className="linkStyling"
            onClick={() => {
              window.location.assign("https://www.airbnb.com/d/covidsafety");
            }}
          >
            <span className="hoverEffectStyling">Our COVID-19 Response</span>
          </div>
          <div
            className="linkStyling"
            onClick={() => {
              window.location.assign("https://www.airbnb.com/neighbors");
            }}
          >
            <span className="hoverEffectStyling">
              Report a neighborhood concern
            </span>
          </div>
        </div>
        <div style={{ width: "6%" }}></div>
        <div className="community">
          <b>Community</b>
          <div
            className="linkStyling"
            onClick={() => {
              window.location.assign("https://www.airbnb.org/?locale=en");
            }}
          >
            <span className="hoverEffectStyling">
              Airbnb.org: disaster relief housing
            </span>
          </div>
          <div
            className="linkStyling"
            onClick={() => {
              window.location.assign(
                "https://www.airbnb.com/against-discrimination"
              );
            }}
          >
            <span className="hoverEffectStyling">Combating discrimination</span>
          </div>
        </div>
        <div style={{ width: "6%" }}></div>
        <div className="community">
          <b>Hosting</b>
          <div
            className="linkStyling"
            onClick={() => {
              window.location.assign(
                "https://www.airbnb.com/host/homes?from_footer=1"
              );
            }}
          >
            <span className="hoverEffectStyling">Airbnb your home</span>
          </div>
          <div
            className="linkStyling"
            onClick={() => {
              window.location.assign(
                "https://www.airbnb.com/aircover-for-hosts"
              );
            }}
          >
            <span className="hoverEffectStyling">AirCover for Hosts</span>
          </div>
          <div
            className="linkStyling"
            onClick={() => {
              window.location.assign("https://www.airbnb.com/resources");
            }}
          >
            <span className="hoverEffectStyling">
              Explore hosting resources
            </span>
          </div>
          <div
            className="linkStyling"
            onClick={() => {
              window.location.assign(
                "https://www.airbnb.com/help/community?s=footer"
              );
            }}
          >
            <span className="hoverEffectStyling">
              Visit our community forum
            </span>
          </div>
          <div
            className="linkStyling"
            onClick={() => {
              window.location.assign(
                "https://www.airbnb.com/help/responsible-hosting"
              );
            }}
          >
            <span className="hoverEffectStyling">How to host responsibly</span>
          </div>
        </div>
        <div style={{ width: "6%" }}></div>
        <div className="airbnbDirectory">
          <b>Airbnb</b>
          <div
            className="linkStyling"
            onClick={() => {
              window.location.assign("https://www.airbnb.com/press/news");
            }}
          >
            <span className="hoverEffectStyling">Newsroom</span>
          </div>
          <div
            className="linkStyling"
            onClick={() => {
              window.location.assign("https://www.airbnb.com/2022-winter");
            }}
          >
            <span className="hoverEffectStyling">Learn about new features</span>
          </div>
          <div
            className="linkStyling"
            onClick={() => {
              window.location.assign(
                "https://news.airbnb.com/what-makes-airbnb-airbnb"
              );
            }}
          >
            <span className="hoverEffectStyling">Letter from our founders</span>
          </div>
          <div
            className="linkStyling"
            onClick={() => {
              window.location.assign("https://www.airbnb.com/careers");
            }}
          >
            <span className="hoverEffectStyling">Careers</span>
          </div>
          <div
            className="linkStyling"
            onClick={() => {
              window.location.assign("https://investors.airbnb.com/");
            }}
          >
            <span className="hoverEffectStyling">Investors</span>
          </div>
          <div
            className="linkStyling"
            onClick={() => {
              window.location.assign("https://www.airbnb.com/giftcards");
            }}
          >
            <span className="hoverEffectStyling">Gift cards</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SiteDirectory;
