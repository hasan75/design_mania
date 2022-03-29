import React from 'react'
import teamStyles from './Team.module.css'
function Team() {
  return (
     <div className={teamStyles.mainContainer}>
         <div className={teamStyles.text}>
             <h1>Meet Our <span style={{color: '#560bad'}}>Team</span></h1>
         </div>
             <div className={teamStyles.team}>
        <div className={teamStyles.antu}>
           <div className={teamStyles.image}>
               <img src="#" alt="" />
           </div>
           <h3>Moidul Hasan Khan </h3>
           <h5>Co-Founder &#38; Full Stack Developer</h5>
        </div>     
        <div className={teamStyles.najim}>
           <div className={teamStyles.image}>
               <img src="#" alt="" />
           </div>
           <h3>Najim Uddin</h3>
           <h5>Co-Founder &#38; Frontend Developer</h5>
        </div>  
            <div className={teamStyles.hasan}>
           <div className={teamStyles.image}>
               <img src="#" alt="" />
           </div>
           <h3>Hasan Ahmed</h3>
           <h5>Co-Founder &#38; Full Stack Developer</h5>
        </div>     
         <div className={teamStyles.samim}>
           <div className={teamStyles.image}>
               <img src="#" alt="" />
           </div>
           <h3>Shaminur Rahman </h3>
           <h5>Co-Founder &#38; Frontend Developer</h5>
        </div>    
    </div>
     </div>
  )
}

export default Team