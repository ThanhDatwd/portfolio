


import React from 'react';
import image1 from '../../assets/me.png'
import './testimonals.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const fakeData = [
    {
        avatar: image1,
        name: 'Nguyễn Thành Đạt',
        review: ` bài viết rất hay luồn đến cảm xúc của người đọc 
        với vị trí là một nhà văn , và là một nhà phê bình 
        thì đây là một bài viết đáng để đọc không những thế bài
        văn cũng mang đến cho người đọc những âm hưởng thú vị về 
        cách là văn cũng như là cách diễn tả mạch cảm xúc của tác giả`
    },
    {
        avatar: image1,
        name: 'Nguyễn Thành Đạt',
        review: ` bài viết rất hay luồn đến cảm xúc của người đọc 
        với vị trí là một nhà văn , và là một nhà phê bình 
        thì đây là một bài viết đáng để đọc không những thế bài
        văn cũng mang đến cho người đọc những âm hưởng thú vị về 
        cách là văn cũng như là cách diễn tả mạch cảm xúc của tác giả`
    },
    {
        avatar: image1,
        name: 'Nguyễn Thành Đạt',
        review: ` bài viết rất hay luồn đến cảm xúc của người đọc 
        với vị trí là một nhà văn , và là một nhà phê bình 
        thì đây là một bài viết đáng để đọc không những thế bài
        văn cũng mang đến cho người đọc những âm hưởng thú vị về 
        cách là văn cũng như là cách diễn tả mạch cảm xúc của tác giả`
    },
    {
        avatar: image1,
        name: 'Nguyễn Thành Đạt',
        review: ` bài viết rất hay luồn đến cảm xúc của người đọc 
        với vị trí là một nhà văn , và là một nhà phê bình 
        thì đây là một bài viết đáng để đọc không những thế bài
        văn cũng mang đến cho người đọc những âm hưởng thú vị về 
        cách là văn cũng như là cách diễn tả mạch cảm xúc của tác giả`
    }
]

const Testimonals = () => {

    return (
        <section id='testimonals'>
            <h5>nhận xét của mọi người </h5>
            <h2>testimonals</h2>
            <Swiper className=' container testimonals__container'
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
               
            
            >
                {fakeData.map(({ avatar, name, review }, index) => {
                    return (
                        <SwiperSlide key={index} className='testimonals'>
                            <div className='client__avatar'>
                                <img src={avatar} alt="" />
                            </div>
                            <h5 className='client__name'>{name}</h5>
                            <small className='client__review'>
                               {review}
                            </small>
                        </SwiperSlide>
                    )
                })}


            </Swiper>
        </section>
    );
}

export default Testimonals;
