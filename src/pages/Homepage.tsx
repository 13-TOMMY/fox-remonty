import React from 'react'
import '../scss/pages/homepage.scss'
import Banner from '../components/Banner'

function Homepage() {
  const keywords = ["Keyword 1", "Keyword 2", "Keyword 3", "Keyword 4", "Keyword 5", "Keyword 6"];

  return (
    <div>
      <Banner keywords={keywords} />
    </div>
  )
}

export default Homepage