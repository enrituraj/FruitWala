import React from 'react'
import './Contact.scss'

import email from './../../assets/img/email.png'
import phone from './../../assets/img/phone.png'
import location from './../../assets/img/location-map.png'

import { BiMailSend, BiPhoneCall, BiSolidBuildingHouse } from "react-icons/bi";

const Contact = () => {
  return (
    <>
      <div className="banner_section">
        <div class="section_heading">
          <h2 className='title'> <span className='primary'>C</span>ontact Us</h2>
          <p>Connect with us effortlessly through our Contact section. Whether you have questions, feedback, or just want to say hello, we're here to assist. Reach out and let's chat!

          </p>
        </div>

        <div className="row_col">
          <div className="card">
            <BiMailSend className='icon' />
            <img src={email} alt="" />
            <h1>email</h1>
            <a href="mailto:">Fruitwala@google.com</a>
            <a href="mailto:">Fruitwala@hotmail.com</a>
          </div>
          <div className="card">
            <BiPhoneCall className='icon' />
            <img src={phone} alt="" />

            <h1>mobile no</h1>
            <a href="tel:+">+91 9876543210</a>
            <a href="tel:+">+91 9876543210</a>
          </div>
          <div className="card">
            <BiSolidBuildingHouse className='icon' />
            <img src={location} alt="" />

            <h1>address</h1>
            <address>Lal Qila
              Chandni Chowk, Delhi, 110006</address>
          </div>
        </div>
      </div>
      <section className="section">

        <div className="contact_area">
          <div className="contact_iframe">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14004.520059543347!2d77.23039172666238!3d28.655825488407963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfce274e3e18f%3A0x40209eb01fb00526!2sLal%20Qila%2C%20Chandni%20Chowk%2C%20Delhi%2C%20110006!5e0!3m2!1sen!2sin!4v1701232071595!5m2!1sen!2sin" width="100%" height="515" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="contact_form">
            <h2 className='form-title'>Contact Us</h2>
            <img src={phone} alt="" />
            <form action="" method="post">

              <div className="form_group">
                <label htmlFor="name">Name</label>
                <input type="text" required id='name' className='input_box' placeholder='Enter Fullname' />
              </div>
              <div className="form_group">
                <label htmlFor="mobile_no">Mobile No</label>
                <input type="number" required id='mobile_no' className='input_box' placeholder='Enter Mobile No' />
              </div>
              <div className="form_group">
                <label htmlFor="email">Email</label>
                <input type="email" required id='email' className='input_box' placeholder='Enter Email Address' />
              </div>
              <div className="form_group">
                <label htmlFor="msg">Message</label>
                <textarea id='msg' required className='input_box' placeholder='Enter your message'></textarea>
              </div>
              <button type="submit" className='btn-submit'>Submit Now</button>
            </form>
          </div>
        </div>

      </section>
    </>
  )
}

export default Contact
