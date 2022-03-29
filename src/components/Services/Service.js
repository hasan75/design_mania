import React from 'react'
import {Webdesign} from './ServiceData'
// import { FaRegHandPaper } from "react-icons/fa";
import { ImArrowUp } from "react-icons/im";
import serviceStyles from './Service.module.css'
function Service() {
  return (
<div className={serviceStyles.mainservice}>
  <h2>Our <span style={{color:"#560bad"}}>Services</span></h2>
<div className={serviceStyles.service}>
       <div className={serviceStyles.container}>
             <div className={serviceStyles.web}>
               <div className={serviceStyles.image}>
  <img src="https://i.ibb.co/0CcbZYC/4804443-removebg-preview.png" alt="logo" />
               </div>
         <h1>Web Design &#38; Development </h1>
            <p>We build financial models you can pitch to investors</p>
            {/* <span> <FaRegHandPaper/> </span> */}
            <span> <ImArrowUp/> </span>

             </div>
             <div className={serviceStyles.overlay}> 
     <div className={serviceStyles.text}>
         <h1>Web Design &#38; Development </h1>
     {Webdesign.map((item,i)=>(
             <li className={serviceStyles.listItem} key={i}>{item.title}</li>
         ))}
     </div>
   </div>
     </div>
     <div className={serviceStyles.container}>
             <div className={serviceStyles.web}>
             <div className={serviceStyles.image}>
  <img src="https://i.ibb.co/0CcbZYC/4804443-removebg-preview.png" alt="logo" />
               </div>
         <h1>Web Design &#38; Development </h1>
            <p>We build financial models you can pitch to investors</p>
            {/* <span> <FaRegHandPaper/> </span> */}
            <span> <ImArrowUp/> </span>

             </div>
             <div className={serviceStyles.overlay}> 
     <div className={serviceStyles.text}>
         <h1>Web Design &#38; Development </h1>
     {Webdesign.map((item,i)=>(
             <li className={serviceStyles.listItem} key={i}>{item.title}</li>
         ))}
     </div>
   </div>
     </div>
     <div className={serviceStyles.container}>
             <div className={serviceStyles.web}>
             <div className={serviceStyles.image}>
  <img src="https://i.ibb.co/0CcbZYC/4804443-removebg-preview.png" alt="logo" />
               </div>
         <h1>Web Design &#38; Development </h1>
            <p>We build financial models you can pitch to investors</p>
            {/* <span> <FaRegHandPaper/> </span> */}
            <span> <ImArrowUp/> </span>
             </div>
             <div className={serviceStyles.overlay}> 
     <div className={serviceStyles.text}>
         <h1>Web Design &#38; Development </h1>
     {Webdesign.map((item,i)=>(
             <li className={serviceStyles.listItem} key={i}>{item.title}</li>
         ))}
     </div>
   </div>
     </div>
  </div>
</div>
  )
}

export default Service