import React from 'react'
import Card from './Card'
import { projects } from '../Projects'
import images from '../images'
import './projects.css'
import NavBar from './NavBar'
import Footer from './Footer'

const heroStyle={
  backgroundImage: "url(" + images.projectHero + ")",
}
const ProjectsComponent = ({ darkTheme, scrollStyle }) => {
  return (
    <>
   

          <div className='hero-img-container' style={heroStyle}></div>
    <div className='article'>
    <h3 style={{color: darkTheme ?  '#ffff' : 'black'}} >Projects</h3>
    </div>
    <div className='card-container'>
        {projects?.map((proj, idx) => (
        <Card
          key={`prj-${idx}`}
          id={`${idx}-${new Date()}`}
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
        </>

  )
}

export default ProjectsComponent
