import React from 'react';
import homeDivStyles from './HomeDiv.module.css';
import videoContent from '../../videos/Untitled design.mp4';

const HomeDiv = () => {
  return (
    <div className={`${homeDivStyles.homeDiv} container`}>
      <div className={`${homeDivStyles.rowBanckground} row`}>
        <div className='col-md-5 pt-4 mt-1'>
          <h1
            className={`${homeDivStyles.heading} fw-bold mt-lg-4 mt-sm-2 mb-3`}
          >
            Start Making <br /> Your Website Today
          </h1>
          <h6 className='fw-bold text-secondary mt-3 mb-3 pb-lg-3'>
            From Idea To Product
          </h6>
          <div className='row g-1'>
            <div className='col-4'>
              <div
                className={`${homeDivStyles.homeCategory} d-flex justify-content-center align-items-center text-center`}
              >
                <span>Web Design and Development</span>
              </div>
            </div>
            <div className='col-4'>
              <div
                className={`${homeDivStyles.homeCategory} d-flex justify-content-center align-items-center`}
              >
                <span>Custom Web App</span>
              </div>
            </div>
            <div className='col-4'>
              <div
                className={`${homeDivStyles.homeCategory} d-flex justify-content-center align-items-center`}
              >
                <span>E-commerce Development</span>
              </div>
            </div>
          </div>
          <div
            className={`${homeDivStyles.getStarted} my-4 d-flex align-items-center`}
          >
            <button
              className={`${homeDivStyles.getStartButton} d-flex align-items-center`}
            >
              <span> Get Started</span>{' '}
              <i class='fa-solid fa-arrow-right-long ms-2'></i>
            </button>
            <span className={`${homeDivStyles.textLine} ms-3 ps-3`}>
              Let Your Dreams be Live!
            </span>
          </div>
        </div>
        <div className='col-md-7'>
          <video className={`${homeDivStyles.videoStyle}`} autoPlay loop muted>
            <source src={videoContent} type='video/mp4' />
          </video>
        </div>
      </div>
    </div>
  );
};

export default HomeDiv;
