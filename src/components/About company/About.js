import React from 'react';
import Team from '../Team/Team';
import aboutStyles from './About.module.css';
import { about, exprience, support } from './AboutData';
function About() {
  return (
    <div className={`${aboutStyles.about} container`} id='aboutSection'>
      <div className='row g-1 d-flex  align-items-center'>
        <div className='col-md-6'>
          <div className={aboutStyles.Container}>
            <div className={aboutStyles.firstDiv}>
              {about.map((item) => (
                <>
                  <h4>{item.title}</h4>
                  <h1>{item.header}</h1>
                  <p className='pe-4'>{item.about}</p>
                </>
              ))}
            </div>
            <div className={aboutStyles.secondDiv}>
              <div className={aboutStyles.eBtn}>
                {exprience.map((item) => (
                  <>
                    <div className={aboutStyles.icon}>{item.icon}</div>
                    <button className={aboutStyles.cta}>
                      <span className={aboutStyles.animation}>
                        {item.title}
                      </span>
                    </button>
                    <p className={aboutStyles.para}>{item.para}</p>
                  </>
                ))}
              </div>
              <div className={aboutStyles.sBtn}>
                {support.map((item) => (
                  <>
                    <div className={aboutStyles.icon}>{item.icon}</div>
                    <button className={aboutStyles.cta}>
                      <span className={aboutStyles.animation}>
                        {item.title}
                      </span>
                    </button>
                    <p className={`${aboutStyles.para} me-3`}>{item.para}</p>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-6'>
          <div className={aboutStyles.teamdata}>
            <Team />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
