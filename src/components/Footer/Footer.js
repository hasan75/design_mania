import React from 'react';
import footerStyles from './Footer.module.css';
import kajlogo from '../../images/kajkamlogo.png';

const Footer = () => {
  return (
    <div className={`${footerStyles.footer}`}>
      <div className='text-center mt-5'>
        <img
          src={kajlogo}
          alt='logoOfCompany'
          className={`${footerStyles.footerLogo}`}
        />
      </div>
      <div className='container mb-5 mt-4'>
        <div className='row g-2'>
          <div className='col-md-4'>
            <div className='allItems text-center'>
              <i class='fa-solid fa-globe fa-3x text-info'></i>
              <p className='my-2 fw-bold'>
                House:15, Road:07, Uttara Sector-10, Dhaka-1230
              </p>
              <span>Our Address</span>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='text-center'>
              <i class='fa-solid fa-envelope fa-3x text-info'></i>
              <p className='my-2 fw-bold'>contact@kajkam.com</p>
              <span>Our MailBox</span>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='text-center'>
              <i class='fa-solid fa-phone fa-3x text-info'></i>
              <p className='my-2 fw-bold'>+880 176 1395574</p>
              <span>Our Phone</span>
            </div>
          </div>
        </div>
      </div>
      <div className='container '>
        <div className='d-flex align-items-center justify-content-center pb-3'>
          <a className={`${footerStyles.footerNav}`} href='#homeSection'>
            Home
          </a>
          <a className={`${footerStyles.footerNav}`} href='#homeSection'>
            {' '}
            Service
          </a>
          <a className={`${footerStyles.footerNav}`} href='#homeSection'>
            About
          </a>
          <a className={`${footerStyles.footerNav}`} href='#homeSection'>
            Contact
          </a>
        </div>
        <p className='text-dark fw-bold text-center my-2 pb-3'>
          CopyRight &copy; 2022 KajKam Initiative. All Rights Reserved
        </p>
      </div>
      <div className='d-flex justify-content-center align-items-center'>
        <a
          className={`${footerStyles.footerSocial} ${footerStyles.instagram} `}
          href=''
          target='_blank'
        >
          <i class='fa-brands fa-instagram fa-2x'></i>
        </a>
        <a
          href=''
          target='_blank'
          className={`${footerStyles.footerSocial} ${footerStyles.faceBook}`}
        >
          <i class='fa-brands fa-facebook-f fa-2x'></i>
        </a>
        <a
          href=''
          target='_blank'
          className={`${footerStyles.footerSocial} ${footerStyles.linkedin}`}
        >
          <i class='fa-brands fa-linkedin-in fa-2x'></i>
        </a>
        <a
          href=''
          target='_blank'
          className={`${footerStyles.footerSocial} ${footerStyles.twitter}`}
        >
          <i class='fa-brands fa-twitter fa-2x'></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
