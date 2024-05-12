import React from 'react';
import imageMe from '../../assets/me.png'
import { FaAward } from 'react-icons/fa'
import './about.css'

const About = () => {
    return (
        <section id='about'>
            <h5>get to know</h5>
            <h2>About Me</h2>
            <div className='container about__container' >
                <div className='about__me'>
                    <div className='about__me-image'>
                        {/* <img src={imageMe} alt="" /> */}
                    </div>
                </div>
                <div className='about__content'>
                    <div className='about__cards'>
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Học Vấn</h5>
                            <small>Cao Đẳng thực hành PFT Polytechnic</small>
                        </article>
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Ngày Sinh</h5>
                            <small>01/01/2002</small>
                        </article>
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Quê Quán</h5>
                            <small>THANH HÓA</small>
                        </article>
                    </div>
                    <p>
                        Xin chào đây là thông tin cơ bản về bản thân tôi 
                        và tóm tắt quá trình học tập tại trường của tôi
                        rất mong được sự góp ý của các bạn cũng như hội đồng phỏng vấn
                    </p>
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    );
}

export default About;