import React from 'react';
import CTA from './CTA.js';
import Headersocials from './headerSocials'
import me from '../../assets/me.png'
import './header.css'

const Header = () => {
    return (
        <header>
            <div className='container header__container'>
                <h5>hello i'm</h5>
                <h1>Thành Đạt</h1>
                <h5 className='text-light'>Front end developer</h5>
                <CTA/>
                <Headersocials/>        
                <div className='me'>
                    {/*   */}
                </div>
                <div className='me2'>
                    {/*   */}
                  <div className='content'>WELCOME</div>
                </div>
                <a href="#contact" className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    );
}

export default Header;