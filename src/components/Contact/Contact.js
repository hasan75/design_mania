import React, { useRef, useState } from 'react';
import './ContactTrue.css';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
const Contact = () => {
  const [selectedCat, setSelectedCat] = useState('');

  const nameRef = useRef();
  const emailRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();
  const categoryRef = useRef();

  const handleCatChange = (e) => {
    setSelectedCat(e.target.value);
  };

  const formSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const category = selectedCat;
    const subject = subjectRef.current.value;
    const message = messageRef.current.value;

    const newMessage = { name, email, category, subject, message };

    const contactMessage = async () => {
      try {
        const res = await fetch('https://system.kajkaminitiative.com/contact', {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(newMessage),
        });
        // console.log(res);
        const json = await res.json();

        if (json.status === 'success') {
          Swal.fire('Your Message has been sent!', '', 'success');
        }
      } catch (error) {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Something Went Wrong',
          html: 'Please Try again',
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(error);
      }
    };
    contactMessage();

    /**
     * ! Working
     */
    //   const makeAPICall = async () => {
    //     try {
    //       const response = await fetch(
    //         'https://system.kajkaminitiative.com/contact',
    //         {
    //           method: 'post',
    //           mode: 'cors',
    //           headers: {
    //             'Content-Type': 'application/json',
    //           },
    //           body: JSON.stringify(newMessage),
    //         }
    //       );
    //       await console.log(response);
    //       const data = await response.json();
    //       console.log(data.data.message);
    //     } catch (e) {
    //       console.log(e);
    //     }
    //   };
    //   makeAPICall();
  };

  return (
    <section id='contact'>
      <div className='container mb-4 mt-4'>
        <div className='row justify-content-center'>
          <div className='col-md-6 text-center mb-5'>
            <h2 className='heading-section fw-bold'>Contact Us</h2>
            <p className='fw-bold text-secondary'>
              Any Question or remarks? Just Write us a message!
            </p>
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className='col-md-12'>
            <div className='wrapper'>
              <div className='row g-0'>
                <div className='col-lg-8 col-md-7 order-md-last d-flex align-items-stretch '>
                  <div className='contact-wrap w-100 p-md-5 p-4 columContact'>
                    <h3 className='mb-4'>Get in touch</h3>
                    <form
                      id='contactForm'
                      name='contactForm'
                      className='contactForm'
                      onSubmit={formSubmit}
                    >
                      <div className='row'>
                        <div className='col-md-6'>
                          <div className='form-group my-2'>
                            <label
                              className='label contactLabel'
                              htmlFor='name'
                            >
                              Full Name
                            </label>
                            <input
                              type='text'
                              className='form-control px-2 py-1 my-1'
                              name='name'
                              id='name'
                              placeholder='Name'
                              ref={nameRef}
                            />
                          </div>
                        </div>
                        <div className='col-md-6'>
                          <div className='form-group my-2'>
                            <label
                              className='label contactLabel'
                              htmlFor='email'
                            >
                              Email Address
                            </label>
                            <input
                              type='email'
                              className='form-control px-2 py-1 my-1'
                              name='email'
                              id='email'
                              placeholder='Email'
                              required
                              ref={emailRef}
                            />
                          </div>
                        </div>
                        <div className='col-md-12'>
                          <div className='form-group my-2'>
                            <label
                              className='label contactLabel radioLabel'
                              htmlFor='website'
                            >
                              How Can We Assist You?
                            </label>
                            <div>
                              <div className='form-check form-check-inline me-4 mt-2'>
                                <input
                                  className='form-check-input text-success'
                                  type='radio'
                                  name='inlineRadioOptions'
                                  id='webDesign'
                                  value='Web Design & Development'
                                  onClick={handleCatChange}
                                  ref={categoryRef}
                                />
                                <label
                                  className='form-check-label'
                                  htmlFor='webDesign'
                                >
                                  Web Design and Development
                                </label>
                              </div>
                              <div className='form-check form-check-inline me-4 mt-2'>
                                <input
                                  className='form-check-input'
                                  type='radio'
                                  name='inlineRadioOptions'
                                  id='customApp'
                                  value='Custom Web App'
                                  onClick={handleCatChange}
                                  ref={categoryRef}
                                />
                                <label
                                  className='form-check-label'
                                  htmlFor='customApp'
                                >
                                  Custom Web App
                                </label>
                              </div>
                              <div className='form-check form-check-inline mt-2'>
                                <input
                                  className='form-check-input'
                                  type='radio'
                                  name='inlineRadioOptions'
                                  id='ECommerce'
                                  value='E-Commerce'
                                  onClick={handleCatChange}
                                  ref={categoryRef}
                                />
                                <label
                                  className='form-check-label'
                                  htmlFor='ECommerce'
                                >
                                  E - Commerce
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='col-md-12'>
                          <div className='form-group my-2'>
                            <label
                              className='label contactLabel'
                              htmlFor='subject'
                            >
                              Subject
                            </label>
                            <input
                              type='text'
                              className='form-control px-2 py-1 my-1'
                              name='subject'
                              id='subject'
                              placeholder='Subject'
                              ref={subjectRef}
                            />
                          </div>
                        </div>
                        <div className='col-md-12'>
                          <div className='form-group my-2'>
                            <label className='label contactLabel' htmlFor='#'>
                              Message
                            </label>
                            <textarea
                              name='message'
                              className='form-control px-2 py-1 my-1'
                              id='message'
                              cols='30'
                              rows='4'
                              placeholder='Message'
                              required
                              ref={messageRef}
                            ></textarea>
                          </div>
                        </div>
                        <div className='col-md-12'>
                          <div className='form-group my-2'>
                            <input
                              type='submit'
                              value='Send Message'
                              className='btn btn-info mt-4'
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className='col-lg-4 col-md-5 d-flex align-items-stretch contactBorder'>
                  <div className='info-wrap  w-100 p-md-5 p-4'>
                    <h3>Contact Information</h3>
                    <p className='mb-4'>
                      Fill Up the form and our team will get back ti you within
                      12 hours.
                    </p>
                    <div className='dbox w-100 d-flex align-items-start'>
                      <div className='icon d-flex align-items-center justify-content-center'>
                        <span className='fa fa-map-marker'></span>
                      </div>
                      <div className='text pl-3 ms-2'>
                        <p>
                          House: 15, Road: 07, Uttara Sector-10, Dhaka-1230.
                        </p>
                      </div>
                    </div>
                    <div className='dbox w-100 d-flex align-items-center'>
                      <div className='icon d-flex align-items-center justify-content-center'>
                        <span className='fa fa-phone'></span>
                      </div>
                      <div className='text pl-3 ms-2'>
                        <p>
                          {' '}
                          <a className='anchors' href='tel://1234567920'>
                            +8801761395574
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className='dbox w-100 d-flex align-items-center'>
                      <div className='icon d-flex align-items-center justify-content-center'>
                        <span className='fa fa-paper-plane'></span>
                      </div>
                      <div className='text pl-3 ms-2'>
                        <p>
                          {' '}
                          <a
                            className='anchors'
                            href='mailto:info@yoursite.com'
                          >
                            info@kajkam.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
