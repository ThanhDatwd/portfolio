import React from 'react';
import './experience.css'

import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
    return (
        <section id='experience'>
            <h5> the skill i have </h5>
            <h2>Experience</h2>
            <div className='container experience__container'>
                <div className='experience__frontend'>
                    <h3>Front end</h3>
                    <div className="experience__content">
                        <article className='experience__details'>
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>HTML, CSS</h4>
                               <small className='text-light'> Experienced:{" > 1.5 Year"}</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>JAVASCRIPT</h4>
                               <small className='text-light'> Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>TYPESCRIPT</h4>
                               <small className='text-light'> Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>REACTJS</h4>
                               <small className='text-light'> Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>BOOTRAP</h4>
                               <small className='text-light'> Experienced:{" > 1.5 Year"}</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>METERIAL UI</h4>
                               <small className='text-light'> Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>ANTD UI</h4>
                               <small className='text-light'> Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>
                <div className='experience__backend'>
                    <h3>BACK END</h3>
                    <div className="experience__content">
                    <article className='experience__details'>
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>PHP</h4>
                               <small className='text-light'> Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>NODEJS</h4>
                               <small className='text-light'> Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>EXPRESSJS</h4>
                               <small className='text-light'> Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>LARAVEL</h4>
                               <small className='text-light'> Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>MYSQL</h4>
                               <small className='text-light'> Experienced</small>
                            </div>
                        </article>
                        <article className='experience__details'>
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>MONGODB</h4>
                               <small className='text-light'> Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;