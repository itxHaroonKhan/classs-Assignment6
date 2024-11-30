import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ExploreCoursesSection from './components/ExploreCoursesSection'
import Logo from './components/Logo2'
import Achivement from './components/AchivementSection'
import Courses from './components/Courses'
import TeamSection from './components/TeamSection'
import CustomerSection from './components/CustomerSection'
import Footer from './components/Footer'
function Home() {
  return (
    <div className='overflow-x-hidden'>
      <Header/>
      <HeroSection/>
      <Logo/>
      <ExploreCoursesSection/>
      <Achivement/>
      <Courses/>
      <TeamSection/>
      <CustomerSection/>
      <Footer/>
    </div>
  )
}

export default Home