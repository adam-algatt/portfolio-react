import React from 'react'
import images from '../images'

const Skills = ({ themeStyles }) => {

  //generates css background url prop for 600x800px article images
  const genBgUrl = (imgPath) => {
  const url =  {backgroundImage: "url(" + imgPath + ")"}
    return  url 
  }

  return (
    <div className='transparent-container'>
    <div className='article' style={themeStyles}>
    <h3 style={{color: `${themeStyles.color}`}}> Skills (MERN)</h3>
    
  <div className='skill-conatiner'>


<div className='skill-article'>
<p >MongoDB, Express, React, and Node.js(MERN)
I am very familiar with the MERN stack.  </p>
  <div className='picture-wrapper' style={genBgUrl(images.communication)}>
  <div className='picture-overlay'>
  <h3 id='skill-title'>MERN</h3>
  </div>  

  </div>


</div>

<div className='skill-article'>

  <div className='picture-wrapper' style={genBgUrl(images.communication)}>
   <div className='picture-overlay'>
   <h3 id='skill-title' >Communication</h3>
   </div>

</div>

  <p >Lorem ipsum dolor sit amet consectetur 
  adipisicing elit. Quae ratione, autem 
  reprehenderit, aliquid odio nesciunt adipisci eius 
  voluptatem amet necessitatibus aliquam labore cumque iusto aspernatur quod. Id 
  sunt nemo molestiae omnis optio excepturi expedita, illo possimus aperiam provident, 
  necessitatibus magnam, eaque aut soluta tenetur sapiente mollitia. Fuga, dolorum omnis.
   Possimus.</p>
</div>
<div className='skill-article' >
<p >Lorem ipsum dolor sit amet consectetur 
  adipisicing elit. Quae ratione, autem 
  reprehenderit, aliquid odio nesciunt adipisci eius 
  voluptatem amet necessitatibus aliquam labore cumque iusto aspernatur quod. Id 
  sunt nemo molestiae omnis optio excepturi expedita, illo possimus aperiam provident, 
  necessitatibus magnam, eaque aut soluta tenetur sapiente mollitia. Fuga, dolorum omnis.
   Possimus.</p>
<div>

<div className='picture-wrapper' style={genBgUrl(images.teamwork)}>
<div className='picture-overlay'>
<h3 id='skill-title'>Teamwork</h3>

</div>

</div>

</div>

</div>
<div className='skill-article'>

<div className='picture-wrapper' style={genBgUrl(images.problemSolving)}>
<div className='picture-overlay'>
<h3 id='skill-title'>Problem-solving</h3>
</div>
</div>
<p >Lorem ipsum dolor sit amet consectetur 
  adipisicing elit. Quae ratione, autem 
  reprehenderit, aliquid odio nesciunt adipisci eius 
  voluptatem amet necessitatibus aliquam labore cumque iusto aspernatur quod. Id 
  sunt nemo molestiae omnis optio excepturi expedita, illo possimus aperiam provident, 
  necessitatibus magnam, eaque aut soluta tenetur sapiente mollitia. Fuga, dolorum omnis.
   Possimus.</p>
</div>


</div>

   </div>
   </div>
  )
}

export default Skills
