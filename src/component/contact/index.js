import React,{useRef} from 'react';
import emailjs from 'emailjs-com';

import {AiOutlineMail} from 'react-icons/ai'
import {BsMessenger,BsFillTelephoneFill} from 'react-icons/bs'
import './contact.css'

const Contact = () => {
  const form = useRef();
  // PHẦN CODE JS ĐỂ GỬI EMAIL DÙNG THƯ VIỆN EMAIL JS
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current)

    emailjs.sendForm('service_1wk1ua5', 'template_4sztiyb', form.current, '3_NM92GAJv_CLFzdm')
      .then((result) => {
          console.log(result.text);
          e.target.reset()
      }, (error) => {
          console.log(error.text);
      });
  };
//   ////////////////////////////////////////////////////
    return (
        <section id='contact'>
            <h5>let contact with me if you want</h5>
            <h2>Contact</h2>
            <div className='container contact__container'>
                <div className='contact__options'>
                    <article className='contact__option'>
                        <AiOutlineMail/>
                        <h4>Email</h4>
                        <h5>suport01@gmail.com</h5>
                        <a href="mailto:nguyenthanhdatntd01@gmail.com" target='_blank'>sent a message</a>
                    </article>
                    <article className='contact__option'>
                        <BsMessenger/>
                        <h4>Message</h4>
                        <h5>suport01</h5>
                        <a href="#">sent a message</a>
                    </article>
                    <article className='contact__option'>
                        <BsFillTelephoneFill/>
                        <h4>Phone</h4>
                        <h5>0988 99 6666</h5>
                        <a href="mailto:nguyenthanhdatntd01@gmail.com">Call Now</a>
                    </article>
                </div>
                <form action='' ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='your full name' required />
                    <input type="mail" name='email' placeholder='your mail' required />
                    <textarea  rows="7" name='message' placeholder='your message' required> </textarea>
                    <button type='submit' className='btn btn-primary'> Sent</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;