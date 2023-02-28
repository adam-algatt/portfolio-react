import React from 'react'
import { ThemeContext } from '../App';

const Divider = ({ image }) => {

  const darkTheme = ThemeContext._currentValue;

  return (

  <img src={image} alt='hobby-icon'/>

  )
}
export default Divider
