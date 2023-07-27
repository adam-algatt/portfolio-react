import React, { useState } from 'react'
import { ThemeContext } from '../App';
import images from '../images/index';

/*Desktop size changes the navbar to horizontal if size is > some pre determined amount*/
const NavBar = (props) => {
  const [navVisble, setNavVisible] = useState('');
  
  const darkTheme = ThemeContext._currentValue;

  //state to toggle expanding nav <ul> 
  const [subNavVisible, setSubNavVisible] = useState(false);

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

            <img className="logo" src={images.navLogo} alt="logo" />
            <ul className="list">
              <li><a href="https://docs.google.com/document/d/17H18r5NuuDFTxZ-qwWPikGPt4kziYtLF/edit">Resume</a></li>
              <li><a href="https://github.com/adam-algatt">GitHub</a></li>
              <li><a href={`/`}>About</a></li>
              <li><a href={`/projects`}>Projects</a></li>
              <li><a href={`/hobbies`}>Hobbies</a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar