import './App.css';
import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import ArticleSection from './components/ArticleSection';
import ThemeButton from './components/ThemeButton';
import { projects } from './Projects'
import Card from './components/Card';
import Footer from './components/Footer';
import images from './images';
import { Route } from 'react-router-dom'
export const ThemeContext = React.createContext();


let scrollStyle = 10;

function handleScroll() {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const changeScrollStyle = () => {

  }
  if (scrollTop > scrollStyle) {
    scrollStyle = '-80px'

  } else {
    scrollStyle = '10px'
  }

  changeScrollStyle()

}

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  const changeTheme = () => setDarkTheme(prevTheme => !prevTheme);
  
  const pageColor = () => {
    darkTheme ? document.body.style.background = `url(${images.backgroundDark})` : document.body.style.background = `url(${images.backgroundLight})`;
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
  } 

  useEffect(() => {
    pageColor()  
  }, [darkTheme])
  
  return (
    <ThemeContext.Provider value={darkTheme}>
      <div className='App' onScroll={handleScroll}>
        <ThemeButton click={changeTheme} />
        <NavBar buttonLocation={scrollStyle}/>
        <ArticleSection />
        
        <img className='hr-img' src={`${!darkTheme ? images.hr : images.hrDarkMode}`} alt='hr'/>  

        <div className='card-container'>
          <h2 id='card-section-header' style={{color: `${darkTheme ? 'white' : 'black'}`}}>Projects</h2>
        
        {projects.map((proj, idx) => (
        <Card
          key={`prj-${idx}`}
          id={idx}
          title={proj.title}
          description={proj.description}
          images={proj.techUsed}
          projImg={proj.img}
          buttonText={proj.buttonText}
          link={proj.link}
          />
    ))
    }
        
        </div>
        <Footer/>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
