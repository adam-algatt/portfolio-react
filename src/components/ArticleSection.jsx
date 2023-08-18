import images from '../images/index';
import '../App.css';
import React from 'react'
import { ThemeContext } from '../App';
import Skills from './skills/Skills';
import { Fade } from 'react-reveal';

const heroStyle={
  backgroundImage: "url(" + images.retreatCeremony + ")",
}
const ArticleSection = () => {
  const darkTheme = ThemeContext._currentValue;

  const themeStyles = {
    color: darkTheme ? '#fff' : '#333',
    backgroundImage: '../images/dividerBgDark.jpg',
    backgroundRepeat: 'none',
    backgroundPosition: 'center'
  }

  return (
    <>
    <div className='hero-img-container' style={heroStyle}>
    </div>


    <div className='article' style={themeStyles}>
    <Fade left>
    <h3 style={{color: `${themeStyles.color}`}}>About me</h3>
    </Fade>
        <div className='article-spacer'></div>
        <Fade up duration={2005}> 
        <p className='skill-article article-text' style={{marginTop: '-100px', padding: '5% 7%'}}>I'm a fullstack web developer who grew up in the Pacific Northwest. 
      I am most familiar with the MERN stack,   
      but I am very open to working with or learning any language required.
      Web develpment's lack of gate-keeping and 
      freedom to specialize in fields that appeal to developers' tastes/aptitudes really called to me.
      Prior to pursuing this career I served in the Air Force for eight years(left-most person in photo above). 
     During my service I became very familiar working in diverse teams
      towards a collective goal. </p>
        </Fade>

      </div>
 
   <Skills themeStyles={themeStyles} />
</>
)
}

export default ArticleSection