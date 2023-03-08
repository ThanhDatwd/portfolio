

import React from 'react';
import image1 from '../../assets/product1.jpg';
import image2 from '../../assets/me.png';
import imagegame from '../../assets/game.png';
import './portfolio.css'
const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className='container portfolio__container'>
                  <article className='portfolio__item'>
                      <div className='portfolio__item-image'>
                           <img src={"https://kiemtienblog.com/wp-content/uploads/2019/12/Foody.png"} alt="" />
                      </div>
                      <h3>Project clone Foody</h3>
                      <div className='portfolio__item-cta'>
                        <a href="https://github.com" className='btn' target='_blank'>githup</a>
                        <a href="http://localhost/duanmau/" 
                            className='btn btn-primary'
                            target='_blank'> 
                            live demo
                        </a>
                      </div>
                  </article>
                  <article className='portfolio__item'>
                      <div className='portfolio__item-image'>
                           <img src={"https://cdn1.hoanghamobile.com/tin-tuc/wp-content/uploads/2021/10/2.jpg"} alt="" />
                      </div>
                      <h3>Project CHAT APP</h3>
                      <div className='portfolio__item-cta'>
                        <a href="https://github.com" className='btn' target='_blank'>githup</a>
                        <a href="http://localhost/chatApp/client" 
                            className='btn btn-primary'
                            target='_blank'> 
                            live demo
                        </a>
                      </div>
                  </article>
                  <article className='portfolio__item'>
                      <div className='portfolio__item-image'>
                           <img src={imagegame} alt="" />
                      </div>
                      <h3>Project Game</h3>
                      <div className='portfolio__item-cta'>
                        <a href="https://github.com" className='btn' target='_blank'>githup</a>
                        <a href="http://127.0.0.1:5500/index.html" 
                            className='btn btn-primary'
                            target='_blank'> 
                            live demo
                        </a>
                      </div>
                  </article>
                  <article className='portfolio__item'>
                      <div className='portfolio__item-image'>
                           <img src={"https://images.macrumors.com/t/hi1_a2IdFGRGMsJ0x31SdD_IcRk=/1600x/article-new/2018/05/apple-music-note.jpg"} alt="" />
                      </div>
                      <h3>Project Mucsic App</h3>
                      <div className='portfolio__item-cta'>
                        <a href="https://github.com" className='btn' target='_blank'>githup</a>
                        <a href="https://dribbble.com/shots/17642120-SaaS-landing-Page-Online-Video-Editor" 
                            className='btn btn-primary'
                            target='_blank'> 
                            live demo
                        </a>
                      </div>
                  </article>
                  <article className='portfolio__item'>
                      <div className='portfolio__item-image'>
                           <img src={image1} alt="" />
                      </div>
                      <h3>This is my product</h3>
                      <div className='portfolio__item-cta'>
                        <a href="https://github.com" className='btn' target='_blank'>githup</a>
                        <a href="https://dribbble.com/shots/17642120-SaaS-landing-Page-Online-Video-Editor" 
                            className='btn btn-primary'
                            target='_blank'> 
                            live demo
                        </a>
                      </div>
                  </article>
                  <article className='portfolio__item'>
                      <div className='portfolio__item-image'>
                           <img src={image1} alt="" />
                      </div>
                      <h3>This is my product</h3>
                      <div className='portfolio__item-cta'>
                        <a href="https://github.com" className='btn' target='_blank'>githup</a>
                        <a href="https://dribbble.com/shots/17642120-SaaS-landing-Page-Online-Video-Editor" 
                            className='btn btn-primary'
                            target='_blank'> 
                            live demo
                        </a>
                      </div>
                  </article>
                 
            </div>
        </section>
    );
}

export default Portfolio;
