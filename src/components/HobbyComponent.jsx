import React from 'react'
import Divider from './Divider'
import images from '../images';
const HobbyComponent = ({ darkTheme }) => {
  
    const dividerImages = [darkTheme ? images.weightsDark : images.weightsLight , darkTheme ? images.hikingDark : images.hikingLight, darkTheme ?  images.videoGamesDark : images.videoGamesLight];
   
    const themeStyles = {
        color: darkTheme ? '#fff' : '#333',
        backgroundImage: '../images/dividerBgDark.jpg',
        backgroundRepeat: 'none',
        backgroundPosition: 'center'
      }
      const heroStyle={
        backgroundImage: "url(" + images.hobbyHero + ")",
      }
    return (
    <>
    <div className='hero-img-container' style={heroStyle}></div>

    <div className='divider'>
    {dividerImages.map((img, idx) => (
      <Divider image={img} key={idx} />
    ))}
    </div>
    <div className='transparent-container'>
<div className='article' style={themeStyles}>
<h3 style={{color: `${themeStyles.color}`}}>Hobbies</h3>

<p className='article-text'>I love doing anything physical: hiking, lifting weights, pickleball. 
Outside of the physical realm I really enjoy playing video games that are team oriented. 
</p>
</div>
</div>
  
</>
  )
}

export default HobbyComponent
