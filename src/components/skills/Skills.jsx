import React from 'react'
import images from '../../images'
import SingleSkill from './SingleSkill'
import { skills, softSkills } from './skillsText'
const Skills = ({ themeStyles }) => {

  //generates css background url prop for 600x800px article images
  const genBgUrl = (imgPath) => {
  const url =  {backgroundImage: "url(" + imgPath + ")"}
    return  url 
  }

  return (
    <div className='article' style={themeStyles}>
    <h3 style={{color: `${themeStyles.color}`}}> Skills (MERN)</h3>
    
{console.log(window.innerWidth)}
{skills.map((s, idx) => (
  <SingleSkill 
    title={s.title}
    text={s.text}
    genBgUrl = {genBgUrl}
    idx={idx}
  />
))}
<h3 style={{color: `${themeStyles.color}`}}> Soft Skills</h3>

{softSkills.map((s, idx) => (
  <SingleSkill 
    title={s.title}
    text={s.text}
    genBgUrl = {genBgUrl}
    idx={idx - 1}
  />
))}




</div>

  
  )
}

export default Skills
