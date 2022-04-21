import React from 'react';
import { Webdesign, CustomWebApp, Ecommerce } from './ServiceData';
// import { FaRegHandPaper } from "react-icons/fa";
import { ImArrowUp } from 'react-icons/im';
import serviceStyles from './Service.module.css';
function Service() {
  return (
    <div
      className={`${serviceStyles.mainservice} container`}
      id='serviceSection'
    >
      <h2>
        Our <span style={{ color: '#004f7c' }}>Services</span>
      </h2>
      <div className={serviceStyles.service}>
        {/* WEB DESIGN & DEVELOPMENT  */}
        <div className={serviceStyles.container}>
          <div className={serviceStyles.web}>
            <div className={serviceStyles.image}>
              <img
                src='https://i.ibb.co/Mfps21z/4804443-removebg-ugpreview.png'
                alt='logo'
              />
            </div>
            <h1>Web Design &#38; Development </h1>
            <p>We build financial models you can pitch to investors</p>
            {/* <span> <FaRegHandPaper/> </span> */}
            <span>
              {' '}
              <ImArrowUp />{' '}
            </span>
          </div>
          <div className={serviceStyles.overlay}>
            <div className={serviceStyles.text}>
              <h1>Web Design &#38; Development </h1>
              {Webdesign.map((item, i) => (
                <li className={serviceStyles.listItem} key={i}>
                  {item.title}
                </li>
              ))}
            </div>
          </div>
        </div>
        {/* CUSTOME WEB APP  */}
        <div className={serviceStyles.container2}>
          <div className={serviceStyles.web2}>
            <div className={serviceStyles.image2}>
              <img
                src='https://i.ibb.co/2nM5kD7/Meet-Our-Team.png'
                alt='logo'
              />
            </div>
            <h1>Custom Web App </h1>
            <p>We build financial models you can pitch to investors</p>
            {/* <span> <FaRegHandPaper/> </span> */}
            <span>
              {' '}
              <ImArrowUp />{' '}
            </span>
          </div>
          <div className={serviceStyles.overlay2}>
            <div className={serviceStyles.text2}>
              <h1>Custom Web Application Development </h1>
              {CustomWebApp.map((item, i) => (
                <li className={serviceStyles.listItem2} key={i}>
                  {item.title}
                </li>
              ))}
            </div>
          </div>
        </div>
        {/* E-COMMERCE  */}
        <div className={serviceStyles.container3}>
          <div className={serviceStyles.web3}>
            <div className={serviceStyles.image3}>
              <img
                src='https://i.ibb.co/gvcgHZG/Meet-Our-Team.png'
                alt='logo'
              />
            </div>
            <h1>E-Commerce Website</h1>
            <p>We build financial models you can pitch to investors</p>
            {/* <span> <FaRegHandPaper/> </span> */}
            <span>
              {' '}
              <ImArrowUp />{' '}
            </span>
          </div>
          <div className={serviceStyles.overlay3}>
            <div className={serviceStyles.text3}>
              <h1>E-Commerce Website </h1>
              {Ecommerce.map((item, i) => (
                <li className={serviceStyles.listItem3} key={i}>
                  {item.title}
                </li>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
