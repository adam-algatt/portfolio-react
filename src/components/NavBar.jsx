import React, { useState } from 'react'
import { ThemeContext } from '../App';
import images from '../images/index';
import { Fade, Zoom } from 'react-reveal';

/*Desktop size changes the navbar to horizontal if size is > some pre determined amount*/
const NavBar = (props) => {
  const [navVisble, setNavVisible] = useState('');
  
  const darkTheme = ThemeContext._currentValue;

  //state to toggle expanding nav <ul> 

  const themeStyles = {
    color: darkTheme ? '#fff' : '#333',
  }
  return (
    <>
      <button className="nav-btn open-btn" style={themeStyles} onClick={() => (setNavVisible('visible'))} >
      =
      </button>


      <div className={`nav nav-primary ${navVisble}`}>
        <div style={themeStyles} className={`nav nav-secondary ${navVisble}`}>
          <div className={`nav nav-tertiary ${navVisble}`} >
            <button className="nav-btn close-btn" onClick={() => (setNavVisible(''))}>
              x
            </button>
            <Zoom>
            <img className="logo" src={images.navLogo} alt="logo" />
            </Zoom>
            <ul className="list">
            <Fade left>
              <li><a href="https://docs.google.com/document/d/1qf3oif10HOQX2l292T2stsCMgMb9G4MG/edit?usp=sharing&ouid=102639195884578728983&rtpof=true&sd=true" target='_blank' rel='noreferrer' >Resume</a></li>
              </Fade>
              <Fade left duration={1250}>
              <li><a href="https://github.com/adam-algatt" target='_blank' rel='noreferrer'>GitHub</a></li>

              </Fade>
              <Fade left duration={1500}>
              <li><a href={`/`}>About</a></li>

                </Fade>
                <Fade left duration={1750}>
                <li><a href={`/projects`}>Projects</a></li>

                </Fade>
              
              
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar