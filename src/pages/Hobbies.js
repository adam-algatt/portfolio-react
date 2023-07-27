import React from 'react'
import ArticleSection from '../components/ArticleSection'
import images from '../images'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import ThemeButton from '../components/ThemeButton'
import HobbyComponent from '../components/HobbyComponent'
const About = ({ scrollStyle, darkTheme, click}) => {
  return (
    <div>
    <NavBar scrollStyle={scrollStyle}/>
    <ThemeButton click={click}/>
              {/* <ThemeButton click={changeTheme} /> */}
           
        <HobbyComponent darkTheme={darkTheme} /> 
   <Footer/>
    </div>
  )
}

export default About
