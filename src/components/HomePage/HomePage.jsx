import React, { useState } from 'react'
import Navbar from './navbar/Navbar';
import Hero from './Hero/Hero';
import Slider from './Slider/Slider';
import About from './About/About';
import VideoSlider from './VideoSlider/VideoSlider';
import Cards from './Cards/Cards';
// import Data from './Data/Data';
// import Newsletter from './Newsletter/Newletter';
import MoU from './MoU/MoU';
import EndBanner from './EndBanner/EndBanner';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Section from './Section/Section';
import Campus from './Campus/Campus';
// import Scroller from './Scroller/Scroller';
// import Rankdata from './Ranking/Rankdata';
import Ranking from './Ranking/Ranking';
import Ecosystem from './Ecosystem/Ecosystem';
import Placement from './Placement/Placement';
import CampusVideo from './CampusVideo/CampusVideo';
import ScrollToTopButton from '../ScrollToTopButton';
import Department from './Department/Department';
import FlashNews from '../FlashNews';
// import Homepopup from '../Homepopup';

      
const HomePage = () => {

  return (
    <div className='body'>
      <Section/>
      <Navbar/>
      <CampusVideo/>
      <Slider/>
      <About/>
      
      {/* <Data/> */}
      <Department/>
       <VideoSlider/>
       
      <Ranking/>
      <Placement/>
      {/* <Newsletter/> */}
      <Cards/>
      <Ecosystem/>
      <Hero/>
      <Campus/>
      <MoU/>
      <EndBanner/>
      <Contact/>
      <Footer/>
      <ScrollToTopButton/>
      {/* <Homepopup/> */}
      {/* <FlashNews/> */}
      <recuritment/>
     
    </div>
  )
}

export default HomePage;