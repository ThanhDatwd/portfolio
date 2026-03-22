import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { AiFillGithub, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import useScrollReveal from '../../hooks/useScrollReveal';
import './contact.css';

const Contact = () => {
  const form = useRef();
  const sectionRef = useScrollReveal();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_1wk1ua5', 'template_4sztiyb', form.current, '3_NM92GAJv_CLFzdm')
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" ref={sectionRef} className="scroll-reveal">
      <div className="container contact__container">
        <div className="contact__info">
          <h2>Contact</h2>
          <p className="contact__text">
            I'm currently looking to join a cross-functional team that values
            improving people's lives through accessible design, or have a project
            in mind? Let's connect.
          </p>
          <a href="mailto:nguyenthanhdatntd01@gmail.com" className="contact__email">
            <AiOutlineMail />
            nguyenthanhdatntd01@gmail.com
          </a>
          <a href="tel:0386352313" className="contact__phone">
            <AiOutlinePhone />
            0386352313
          </a>
          <div className="contact__socials">
            <a href="https://github.com/ThanhDatwd" target="_blank" rel="noreferrer">
              <AiFillGithub />
            </a>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea rows="5" name="message" placeholder="Your Message" required />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
