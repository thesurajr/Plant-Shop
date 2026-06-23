import React from 'react'
import Navbar from '../components/Navbar';
import HeroSection from "../components/HeroSection"
import CardSection from '../components/CardSection';
import AboutUs from '../components/AboutUs';
import Category from '../components/Category';
import Customers from "../components/Customers"
import Footer from '../components/Footer';
function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CardSection />
      <AboutUs />
      <Category />
      <Customers />
      <Footer />
    </div>
  )
}

export default Home