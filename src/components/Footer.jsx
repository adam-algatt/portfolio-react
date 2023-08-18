import React from 'react'
import arrowUp from '../upArrow.svg'
import map from '../map-icon.png'
import email from '../mail-icon.png'
import phone from '../phone-icon.png'
import { ThemeContext } from '../App';

const scrollTop = (e) => {
  console.log('scrollTop called')
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const Footer = () => {
  const darkTheme = ThemeContext._currentValue;
  return (
    <div className='footer-container' style={{marginTop: '5vh'}}>
    <div className={darkTheme ? 'footer-top-row' : 'footer-top-row light' }>
    <div className='footer-div'>
   <div className='footer-top-row-img-container'><img src={map} alt="link to site developer's city of residence."/></div><a href='https://www.google.com/maps/place/Clackamas+County,+OR/@45.1736945,-122.2597459,10z/data=!3m1!4b1!4m5!3m4!1s0x54957cbd38c5ef17:0x6525907c67d689ae!8m2!3d45.2023855!4d-122.1188945' target='_blank'>Clackamas County, OR</a>
    </div>
    <div className='footer-div'>
    <div className='footer-top-row-img-container'><img src={email} alt="link to email site developer."/></div><a href='mailto:adam.algatt@gmail.com' >Email Me</a>
    </div>
    <div className='footer-div'>
    <div className='footer-top-row-img-container'><img src={phone} alt="link to call site developer."/></div><a href="tel:503-754-3968">
    +1 503-555-5555</a>
    </div>
    </div>
      <div className={darkTheme ? 'footer-bottom-row' : 'footer-bottom-row light' }>
      <p style={{color: darkTheme ? '#fff' : 'black'}}>&copy; {new Date().getFullYear()} Algatt Creations </p>
      <div><button className='footer-button' onClick={scrollTop}><p style={{color: darkTheme ? '#fff' : 'black'}}>Back to Top</p><img src={arrowUp}/></button></div>
      </div>
    </div>
  )
}

export default Footer
 