import React from 'react'
import images from '../../images'
const SingleSkill = ({title, text, genBgUrl, idx}) => {
   
    const picTitle = () => {
     return (
     <div className='picture-wrapper' style={genBgUrl(images[`${title}`])} > 
     <div className='picture-overlay'> 
      <h3 id='skill-title' >{title}</h3> 
        </div>
  
      </div> 
     )
    }

    const textSection = () => {
        return (
            <p>{text}</p>
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
