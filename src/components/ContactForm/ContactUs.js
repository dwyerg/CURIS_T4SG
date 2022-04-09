import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactElement.css';
import { FaInstagram, FaRegEnvelope } from 'react-icons/fa';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('CURIS', 'template_qq433rp', form.current, 'user_v2BUgDALG4tfvZytoGCnj')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      alert("Email Sent!");
  };

  return (
    <>

      <div className="formCont">
        <h3 className="formHeader">Want to Know More?</h3>
        <h4 className="formSubHdr">Don't hesitate to reach out!</h4>

        <form ref={form} onSubmit={sendEmail}>

          <div className="inputCont">
            {/* <label>Name</label> */}
            <input type="text" name="user_name" placeholder="Name" required />
          </div>

          <div className="inputCont">
            {/* <label>Email</label> */}
            <input type="email" name="user_email" placeholder="Email" required />
          </div>

          <div className="inputCont">
            {/* <label>Message</label> */}
            <textarea name="message" placeholder="Message" required />
          </div>

          <input type="submit" value="Send" className="submitBtn" />
        </form>
      </div>

      <div className="contactInfo">
        <h3 className="formHeader">Find Us At:</h3>
        <div className="iconInline">
          <a className="contactIcon"><FaRegEnvelope /></a>
          <p>CURIS-eboard@umich.edu</p>
        </div>
        <div className="iconInline">
          <a href="https://www.instagram.com/curis.umich" target="_blank" className="contactIcon"><FaInstagram /></a>
          <p>@curis.umich</p>
        </div>
      </div>

    </>
  );
};


export default ContactUs;
