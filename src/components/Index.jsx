import React from 'react'
import Navigation from './Navigation'
import Profile from './profile/Profile'
import Portfolio from './portfolio/Portfolio'
import Client from './Client'
import Footer from './Footer/Footer'

function Index() {
  return (
    <div>
    <Navigation/>
    <Profile/>
    <Portfolio/>
    <Client/>
    <Footer/>
    </div>
  )
}

export default Index