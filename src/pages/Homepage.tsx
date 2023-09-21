import '../scss/pages/homepage.scss'
import Banner from '../components/Banner'
import About from '../components/About';

function Homepage() {

  return (
    <div>
      <div className='homepage-banner-container'>
        <Banner/>
        </div>
      <div className='homepage-about-container'>
        <About/>
      </div>
      <div className='homepage-works-container'></div>
      <div className='homepage-business-card-container'></div>
    </div>
  )
}

export default Homepage