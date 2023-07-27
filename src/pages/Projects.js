import React from 'react';
import ProjectsComponent from '../components/ProjectsComponent';
import '../App.css'
import ThemeButton from '../components/ThemeButton';
import NavBar from '../components/NavBar';

const Projects = ({ darkTheme, scrollStyle, click }) => {
  return (
    <div>
    <NavBar /> 
<ThemeButton click={click}/>
    <ProjectsComponent darkTheme={darkTheme} scrollStyle={scrollStyle}/> 
    </div>
  )
}

export default Projects
