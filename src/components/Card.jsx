import React, { useState } from 'react'
import { motion, layout } from 'framer-motion';
import '../App.css';
import images from '../images/index';

// second component to hold gallery tech used images

// break down card to except props from parent
// coming from projects object 
const Card = ({ title, description, images, id, projImg, buttonText, link }) => {
  // state to hold card expansion status
  const [expanded, setExpanded] = useState([false, false, false, false]);

  const handleClick = (e) => {
    let clicked = e.target;
    let clickedCard = e.currentTarget.id;
        console.log(clicked)
    setExpanded(prev => {
      prev[clickedCard] = !prev[clickedCard];
      clickedCard = ''; 
      return [...prev]
  })
}

  // object to hold pre/post-expansion values
  const style = {
    imgheight: expanded ? '30vh' : '10vh',
    imgRadius: '5px',
    imgBoxShadow: '2px 2px 2px rgba(0, 0, 0, 0.7)',
  }
  
  return (
    
      <motion.div className='card' 
      id={id}
      onClick={handleClick}
      >

        <motion.h2 layout="position">{title}</motion.h2>
        <motion.img className='card-hero'src={projImg}
          style={{ boxShadow: style.imgBoxShadow, borderRadius: style.imgRadius }}
        ></motion.img>
        {expanded[id] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            layout="size"
          >
            <motion.div className='tech-container'>
              <motion.h3>Tech Used</motion.h3>
              
              {images.map(img=>{
                return (
                <motion.img
                src={img}
                key={`${img}-${Date.now()}`}
                className="tech-img"
                />
                )
              })}
          
            </motion.div>
            <motion.p>
              {description}
            </motion.p>
            <motion.div className='button-container'>
            <motion.a className='card-button'><motion.img className="github" src={images.github}></motion.img></motion.a>
              <motion.a className='card-button' href={link}><motion.button className='site-button'>{buttonText}</motion.button></motion.a>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
   
  )
  }
            
  

export default Card
