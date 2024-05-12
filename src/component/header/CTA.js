import React from 'react';
import CV from '../../assets/my-cv.pdf'

const CTA = () => {
    return (
        <div className='cta'>
            <a  href={CV} download  className='btn'>TẢI XUỐNG CV</a>
            <a  href='tel:0386352313' className='btn btn-primary'>GỌI CHO TÔI</a>
        </div>
    );
}

export default CTA;
