import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import RecentPost from './RecentPost'
import Featuredwork from './Featuredwork'
import Footer from './footer'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <RecentPost/>
    <Featuredwork />
    <Footer/>
    </>
    )
}

export default Home