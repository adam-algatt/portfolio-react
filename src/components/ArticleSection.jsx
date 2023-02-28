import images from '../images/index';
import '../App.css';

import React from 'react'
import { ThemeContext } from '../App';
import Divider from './Divider';


const ArticleSection = () => {
  const darkTheme = ThemeContext._currentValue;
  console.log('themeContext', darkTheme);

  const dividerImages = [darkTheme ? images.weightsDark : images.weightsLight , darkTheme ? images.hikingDark : images.hikingLight, darkTheme ?  images.videoGamesDark : images.videoGamesLight];

  const themeStyles = {
    color: darkTheme ? '#fff' : '#333',
    backgroundImage: '../images/dividerBgDark.jpg',
    backgroundRepeat: 'none',
    backgroundPosition: 'center'
  }

  return (
    <>
    <div className='article' style={themeStyles}>
    <h3 style={{color: `${themeStyles.color}`}}>About me</h3>

      <img className='article-img' src={images.retreatCeremony} alt="article-img" />
      
      <p className='article-text'>I'm a fullstack web developer who grew up in the Pacific Northwest. 
      I am most familiar with the MERN stack,   
      but I am a new developer who's very open to working with or learning any language required.
      Web develpment's lack of gate-keeping and 
      freedom to specialize in fields that appeal to developers really called to me.
      Prior to pursuing this career I served in the Air Force for eight years(left-most person in photo above). 
     During my service I became very familiar working in diverse teams
      towards a collective goal. </p>
    </div>
    <div className='divider'>
    {dividerImages.map((img, idx) => (
      <Divider image={img} key={idx} />
    ))}
    </div>
    <div className='article' style={themeStyles}>
    <h3 style={{color: `${themeStyles.color}`}}>Hobbies</h3>
    <p className='article-text'>I love doing anything physical: hiking, lifting weights, pickleball. 
   Outside of the physical realm I really enjoy playing video games that are team oriented. 
   </p>
    </div>
    </>
  )
}

export default ArticleSection