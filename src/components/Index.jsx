import React from 'react'
import Navigation from './Navigation'
import Portfolio from './portfolio/Project'
import Client from './Client'
import Footer from './Footer/Footer'
import About from './profile/About'

function Index() {
  return (
    <div>
    <Navigation/>
    <About/>
    <Portfolio/>
    <Client/>
    <Footer/>
    </div>
  )
}

export default Index