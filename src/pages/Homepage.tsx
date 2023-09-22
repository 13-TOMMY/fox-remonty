import "../scss/pages/homepage.scss";
import Banner from "../components/Banner";
import About from "../components/About";
import Keywords from "../components/Keywords";
import HomepageBtns from "../components/HomepageBtns";

function Homepage() {
  return (
    <div className="homepage-container">
      <div className="homepage-banner-container">
        <Banner />
      </div>
      <div className="homepage-about-container">
        <About />
      </div>
      <div className="homepage-text-container">
        <Keywords />
      </div>
      <div className="homepage-business-card-container">
        <HomepageBtns />
      </div>
    </div>
  );
}

export default Homepage;
