import React from 'react'
import Header from '../Components/Header'
import HomeCorosoul from '../Components/HomeCorosoul'
import CoursesCovered from '../Components/CoursesCovered'
import Ebook from '../Components/Ebook'
import Material from '../Components/Material'
import Footer from '../Components/Footer'




const Home = () => {
  return (
    <>
    <Header/>
    
    <HomeCorosoul/>

    <CoursesCovered/>

    <Ebook />

    <Material/>

    <Footer/>
    </>
  )
}

export default Home