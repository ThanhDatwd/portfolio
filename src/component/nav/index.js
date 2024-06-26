 import React from 'react';
 import {AiOutlineHome,AiOutlineUser} from 'react-icons/ai'
 import {BiBook,BiMessageDetail} from 'react-icons/bi'
 import {RiServiceLine} from 'react-icons/ri'
 import './nav.css'

 const Nav = () => {

    const [activeNav,setActiveNav]=React.useState('#')
     return (
        <nav>
            <a href="#" className={activeNav==='#'?'active':''}
                        onClick={()=> setActiveNav('#')}
            >
                <AiOutlineHome/>
            </a>
            <a href="#about"
                    className={activeNav==='#about'?'active':''}
                    onClick={()=> setActiveNav('#about')}
            >
                <AiOutlineUser/>
            </a>
            {/* <a href="#experience"
                    className={activeNav==='#experience'?'active':''}
                    onClick={()=> setActiveNav('#experience')}
            >
                <BiBook/>
            </a> */}
            <a href="#project"
                    className={activeNav==='#project'?'active':''}
                    onClick={()=> setActiveNav('#services')}
            >
                <RiServiceLine/>
            </a>
            {/* <a href="#services"
                    className={activeNav==='#services'?'active':''}
                    onClick={()=> setActiveNav('#services')}
            >
                <RiServiceLine/>
            </a> */}
            {/* <a href="#contact"
                    className={activeNav==='#contact'?'active':''}
                    onClick={()=> setActiveNav('#contact')}
            >
                <BiMessageDetail/>
            </a> */}
        </nav>
     );
 }
 
 export default Nav;
 