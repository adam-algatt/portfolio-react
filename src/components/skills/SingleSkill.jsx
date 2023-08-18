import React from 'react'
import images from '../../images'
import { Fade, Zoom } from 'react-reveal'
const SingleSkill = ({title, text, genBgUrl, idx}) => {
   
    const picTitle = () => {
     return (
      <Zoom>

    
     <div className='picture-wrapper' style={genBgUrl(images[`${title}`])} > 
     <div className='picture-overlay'> 
      <h3 id='skill-title' >{title}</h3> 
        </div>
  
      </div> 
      </Zoom>
     )
    }

    const textSection = () => {
        return (
          <Fade up duration={2005}>
            <p>{text}</p>
          </Fade>
        )
    }

  return (
   <div className='skill-article'> 
   {/* staggers pictures and text section  */}
    {idx % 2 !== 0 ? picTitle() : textSection()}
    {idx % 2 !== 0 ? textSection() : picTitle() }
      
  </div>
  )
}

export default SingleSkill
