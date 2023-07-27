import './App.css';
import React, { useState, useEffect } from 'react';
import images from './images';
import { Route, Routes } from 'react-router-dom'
import About from './pages/About';
import Projects from './pages/Projects';
import Hobbies from './pages/Hobbies';
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
    darkTheme ? document.body.style.background = 'rgba(44, 53, 57,0.8)'/*`url(${images.backgroundDark})`*/ : document.body.style.background = 'rgba(240,248,255, 0.8)'//`url(${images.backgroundLight})`;
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
  } 

  useEffect(() => {
    pageColor()  
  }, [darkTheme])
  
  return (
 
    <ThemeContext.Provider value={darkTheme}>
      <div className='App' onScroll={handleScroll}>

        <Routes>
        <Route path='/' element={<About scrollStyle={scrollStyle} darkTheme={darkTheme} click={changeTheme}  />} /> 
        <Route path='/projects' element={<Projects scrollStyle={scrollStyle} darkTheme={darkTheme} click={changeTheme} />} />
        <Route path='/hobbies' element={<Hobbies scrollStyle={scrollStyle} darkTheme={darkTheme} click={changeTheme} />} />

        </Routes>

      </div>
    </ThemeContext.Provider>

  );
}

export default App;
