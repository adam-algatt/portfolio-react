import React from 'react'
import images from '../../images'
import SingleSkill from './SingleSkill'
import { skills, softSkills } from './skillsText'
import { Fade } from 'react-reveal'
const Skills = ({ themeStyles }) => {

  //generates css background url prop for 600x800px article images
  const genBgUrl = (imgPath) => {
  const url =  {backgroundImage: "url(" + imgPath + ")"}
    return  url 
  }

  return (
    <div className='article' style={themeStyles}>
    <Fade right>
    <h3 style={{color: `${themeStyles.color}`, marginTop: '170px'}}> Skills (MERN)</h3>
    </Fade>
    
{skills.map((s, idx) => (
  <SingleSkill 
    key={`${idx}-${new Date()}`}
    title={s.title}
    text={s.text}
    genBgUrl = {genBgUrl}
    idx={idx}
  />
))}
<Fade left> 
<h3 style={{color: `${themeStyles.color}`, marginTop: '170px'}}> Soft Skills</h3>
</Fade>

{softSkills.map((s, idx) => (
  <SingleSkill 
    title={s.title}
    text={s.text}
    genBgUrl = {genBgUrl}
    idx={idx - 1}
    key={`${idx}-${new Date()}`}
  />
))}




</div>

  
  )
}

export default Skills
