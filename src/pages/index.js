import React from "react"
import MainTemplate from 'components/templates/MainTemplate/MainTemplate'
import Hero from 'components/templates/HeroTemplate/HeroTemplate';
import About from 'components/templates/HeroTemplate/AboutTemplate';
import MyWorks from 'components/templates/HeroTemplate/MyWorks'
import MySkills from 'components/templates/HeroTemplate/Skills'
import Contact from 'components/templates/HeroTemplate/Contact'
import Footer from 'components/Footer/Footer'

const IndexPage = () => (
  <MainTemplate>
    
      <Hero/>
      <About/>
      <MyWorks/>
      <MySkills/>
      <Contact/>
      <Footer/>
  </MainTemplate>
)

export default IndexPage
