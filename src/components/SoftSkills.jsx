import React from 'react'
import images from '../images'



const SoftSkills = ({themeStyles}) => {
  return (
    <div className='transparent-container'>
    <div className='article' style={themeStyles}>
    <h3 style={{color: `${themeStyles.color}`}}> Soft Skills</h3>
    
  <div className='skill-conatiner'>
  {/* div to hold section of images 
  flex div holding div w/ image and text side by side*/}
<div className='skill-article'>
<p >Lorem ipsum dolor sit amet consectetur 
  adipisicing elit. Quae ratione, autem 
  reprehenderit, aliquid odio nesciunt adipisci eius 
  voluptatem amet necessitatibus aliquam labore cumque iusto aspernatur quod. Id 
  sunt nemo molestiae omnis optio excepturi expedita, illo possimus aperiam provident, 
  necessitatibus magnam, eaque aut soluta tenetur sapiente mollitia. Fuga, dolorum omnis.
   Possimus.</p>
  <div>  
  <h3 id='skill-title' style={{color: themeStyles.color}}>Adaptability</h3>
  <img src={images.adaptability}/> 

  </div>


</div>

<div className='skill-article'>

<div>
  <h3 id='skill-title' style={{color: themeStyles.color}}>Communication</h3>
  <img src={images.communication}/> 

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
<h3 id='skill-title' style={{color: themeStyles.color}}>Teamwork</h3>
<img src={images.teamwork}/> 

</div>

</div>
<div className='skill-article'>
<div>
<h3 id='skill-title' style={{color: themeStyles.color}}>Problem-solving</h3>

<img src={images.problemSolving}/> 

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

export default SoftSkills
