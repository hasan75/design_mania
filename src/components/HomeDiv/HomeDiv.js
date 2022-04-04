import React from 'react';
import homeDivStyles from './HomeDiv.module.css';
import videoContent from '../../videos/Untitled design.mp4';
import { Typewriter } from 'react-simple-typewriter';

const HomeDiv = () => {
  return (
    <div className={`${homeDivStyles.homeDiv} container`}>
      <section id='homeSection'>
        <div className={`${homeDivStyles.rowBanckground} row`}>
          <div className=' col-lg-5 pt-4 mt-1 order-2  order-md-1'>
            <h1 className={`${homeDivStyles.heading} fw-bold mt-lg-4 mb-3`}>
              Start Making <br /> Your{' '}
              <span style={{ fontWeight: 'bold' }}>
                <Typewriter
                  words={[
                    'Website',
                    'Custom WebApp',
                    'E-Commerce Website',
                    'Business Portfolio',
                  ]}
                  loop={Infinity}
                  cursor
                  cursorStyle=''
                  typeSpeed={60}
                  deleteSpeed={40}
                  delaySpeed={1000}
                />
              </span>{' '}
              Today
            </h1>
            <h6 className='fw-bold text-secondary mt-3 mb-3 pb-lg-3'>
              From Idea To Product
            </h6>
            <div className='row g-1'>
              <div className={`${homeDivStyles.singleCategory} col-4`}>
                <div
                  className={`${homeDivStyles.homeCategory} d-flex justify-content-center align-items-center text-center`}
                >
                  <span className={homeDivStyles.categoryTitle}>
                    Web Design and Development
                  </span>
                </div>
              </div>
              <div className={`${homeDivStyles.singleCategory} col-4`}>
                <div
                  className={`${homeDivStyles.homeCategory} d-flex justify-content-center align-items-center text-center`}
                >
                  <span className={homeDivStyles.categoryTitle}>
                    Custom Web App
                  </span>
                </div>
              </div>
              <div className={`${homeDivStyles.singleCategory} col-4`}>
                <div
                  className={`${homeDivStyles.homeCategory} d-flex justify-content-center align-items-center text-center`}
                >
                  <span className={homeDivStyles.categoryTitle}>
                    E-commerce Development
                  </span>
                </div>
              </div>
            </div>
            <div
              className={`${homeDivStyles.getStarted} my-4 d-flex align-items-center`}
            >
              <button
                className={`${homeDivStyles.getStartButton} d-flex align-items-center`}
                onClick={() => (window.location = '#contact')}
              >
                <span> Get Started</span>{' '}
                <i class='fa-solid fa-arrow-right-long ms-2'></i>
              </button>
              <span className={`${homeDivStyles.textLine} ms-3 ps-3`}>
                Let Your Dreams be Live!
              </span>
            </div>
          </div>
          <div className='col-lg-7 order-1 order-md-2'>
            <video
              className={`${homeDivStyles.videoStyle}`}
              autoPlay
              loop
              muted
            >
              <source src={videoContent} type='video/mp4' />
            </video>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeDiv;
