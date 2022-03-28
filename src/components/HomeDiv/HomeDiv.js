import React from 'react';
import homeDivStyles from './HomeDiv.module.css';
import videoContent from '../../videos/Untitled design.mp4';

const HomeDiv = () => {
  return (
    <div className={`${homeDivStyles.homeDiv} container`}>
      <div className={`${homeDivStyles.rowBanckground} row g-1`}>
        <div className='col-md-5 ps-sm-4 ps-md-2 pt-4'>
          <h1 className={`${homeDivStyles.heading} fw-bold`}>
            Start Making Your Website Today
          </h1>
          <h6 className='fw-bold text-secondary my-2'>From Idea To Product</h6>
          <div className='row g-1'>
            <div className='col-4'>
              <div className={`${homeDivStyles.homeCategory}`}>
                <p>Web Design and Development</p>
              </div>
            </div>
            <div className='col-4'>
              <div className={`${homeDivStyles.homeCategory}`}>
                <p>Custom Web App</p>
              </div>
            </div>
            <div className='col-4'>
              <div className={`${homeDivStyles.homeCategory}`}>
                <p>E-commerce Development</p>
              </div>
            </div>
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
