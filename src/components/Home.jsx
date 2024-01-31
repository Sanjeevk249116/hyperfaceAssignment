import React from 'react'
import Navbar from '../pages/Navbar'
import Section1 from '../pages/Section1'
import Section2 from '../pages/Section2'
import Tweets from '../pages/Tweets'

function Home() {
  return (
    <div>
  <Navbar/>
  <Section1/>
  <Section2/>
  <Tweets/>
    </div>
  )
}

export default Home
