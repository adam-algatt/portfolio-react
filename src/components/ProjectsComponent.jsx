import React from 'react'
import Card from './Card'
import { projects } from '../Projects'
import images from '../images'
import NavBar from './NavBar'
import Footer from './Footer'
import { Zoom, Fade } from 'react-reveal'

const heroStyle={
  backgroundImage: "url(" + images.projectHero + ")",
}
const ProjectsComponent = ({ darkTheme, scrollStyle }) => {
  return (
    <>
   

          <div className='hero-img-container' style={heroStyle}></div>
    <div className='article'>
    <Fade left>
    <h3 style={{color: darkTheme ?  '#ffff' : 'black'}} >Projects</h3>
    </Fade>
    </div>
    <div className='card-container'>
        {projects?.map((proj, idx) => (
        <Zoom>
        <Card
          key={`${new Date()}-${idx}`}
          id={`${idx}-${new Date()}`}
          title={proj.title}
          description={proj.description}
          images={proj.techUsed}
          projImg={proj.img}
          buttonText={proj.buttonText}
          link={proj.link}
          />
        </Zoom>
    
    ))
    }
        
        </div> 
        <Footer/>
        </>

  )
}

export default ProjectsComponent
