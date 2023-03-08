 import React from 'react';
 import { AiFillLinkedin,AiFillGithub,AiFillDribbbleCircle } from 'react-icons/ai';
 
 const Headersocials = () => {
     return (
         <div className='header__socials'>
             <a href="https://linkedin.com" target="__bank"><AiFillLinkedin/></a>
             <a href="https://github.com" target="__bank"><AiFillGithub/></a>
             <a href="https://dribbale.com" target="__bank"><AiFillDribbbleCircle/></a>
         </div>
     );
 }
 
 export default Headersocials;
 