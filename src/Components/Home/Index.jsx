import React, { Fragment, useEffect, useState } from 'react';
import Header from "../Header/Index";
import Landing from '../MiniComponents/Landing';
import Profile from '../MiniComponents/Profile';
import Works from '../MiniComponents/Works';
import Education from '../MiniComponents/Education';
import HeroSection from "../../Animaations/Herosection/Index";
import CardEffect from "../../Animaations/Cards/Index";
import { HeroScrollDemo } from "../../Animaations/ScrollAnimation/Index"


 
const Index = () => {

 

  return (
   <Fragment>
       <Header/>
      <HeroSection/>
      {/* <Landing/> */}
      <Profile/> 
      <Works/> 
      <HeroScrollDemo/>
      <Education/>

     
   </Fragment>
  )
}

export default Index