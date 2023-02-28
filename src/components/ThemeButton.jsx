import React, { useContext } from 'react';
import { ThemeContext } from '../App';
import images from '../images';

// get light and dark icon outside of material ui 
const ThemeButton = ({ click }) => {
 const darkTheme = useContext(ThemeContext)
    return (
    <button className='theme-button' onClick={click}>{darkTheme ? <img className='theme-icon' src={images.lightMode} style={{color: 'white'}} alt="light mode icon"/> : <img className='theme-icon' src={images.darkMode} alt="dark mode icon"/>}</button>
  )
}

export default ThemeButton
