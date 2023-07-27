import React from 'react'
import ArticleSection from '../components/ArticleSection'
import images from '../images'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import ThemeButton from '../components/ThemeButton'
const About = ({ scrollStyle, darkTheme, click}) => {
  return (
    <div>
    <NavBar scrollStyle={scrollStyle}/>
    <ThemeButton click={click}/>
              {/* <ThemeButton click={changeTheme} /> */}
        <ArticleSection />
  
   <Footer style={{marginTop: '3vh'}}/>
    </div>
  )
}

export default About
