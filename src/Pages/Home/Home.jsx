import React from 'react'
import SliderHome from '../../Components/SliderHome';
import About from '../../Components/about';
import Features from '../../Components/features';
import WhyChoose from '../../Components/whychoose';
import Services from '../../Components/services';
import Review from '../../Components/review';
import Contact from   '../../Components/contactsec';
export const Home = () => {
  return (
    <div>
        <SliderHome />
        <About/>
        <Features/>
        <WhyChoose/>  
        <Services />
        <Review/> 
        <Contact/>
    </div>
  )
}