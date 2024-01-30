import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import Image1 from '../assets/coachApple.png'
import Image2 from '../assets/coachSara.png'
import Image3 from '../assets/coachBamboo.png'
import Image4 from '../assets/coachLeah.png'
import Image5 from '../assets/coachChito.png'
import Image6 from '../assets/coachMartin.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../index.css';

// import required modules
import { Pagination } from 'swiper/modules';


const Review = () => {
    return (
        <div className='w-full px-6 md:py-10 py-8'>
            <div className='max-w-[1240px] mx-auto mb-10'>
                <div className="mb-6">
                    <h1 className="text-3xl text-center text-amber-500 font-bold">Reviews</h1>
                </div>

                <div>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                        clickable: true,
                        }}
                        breakpoints={{
                            640: {
                              slidesPerView: 2,
                              spaceBetween: 10,
                            },
                            768: {
                              slidesPerView: 2,
                              spaceBetween: 40,
                            },
                            1024: {
                              slidesPerView: 3,
                              spaceBetween: 50,
                            },
                          }}
                        modules={[Pagination]}
                        className="mySwiper"
                        >
                        <SwiperSlide className='border border-amber-500 rounded-lg p-4'>
                            <img className='bg-amber-500 rounded-full' src={Image1} alt="" />
                            <p className='text-base my-2 text-justify'>Goods naman yung lasa. Mahal nga lang pero goods pang barkada, pizza and alak best combo sheeeesh!. Pag ganito ang nasa babalik balikan talaga recommended sa lahat.</p>

                            <h2 className='text-lg text-amber-500 font-semibold '>Coach Apple</h2>
                            <p className='text-base text-gray-200 mb-4'>The Voice Coach</p>
                        </SwiperSlide>

                        <SwiperSlide className='border border-amber-500 rounded-lg p-4'>
                            <img className='bg-amber-500 rounded-full' src={Image2} alt="" />
                            <p className='text-base my-2 text-justify'>Goods naman yung lasa. Mahal nga lang pero goods pang barkada, pizza and alak best combo sheeeesh!. Pag ganito ang nasa babalik balikan talaga recommended sa lahat.</p>

                            <h2 className='text-lg text-amber-500 font-semibold '>Coach Sarah</h2>
                            <p className='text-base text-gray-200 mb-4'>The Voice Coach</p>
                        </SwiperSlide>
                        <SwiperSlide className='border border-amber-500 rounded-lg p-4'>
                            <img className='bg-amber-500 rounded-full' src={Image3} alt="" />
                            <p className='text-base my-2 text-justify'>Goods naman yung lasa. Mahal nga lang pero goods pang barkada, pizza and alak best combo sheeeesh!. Pag ganito ang nasa babalik balikan talaga recommended sa lahat.</p>

                            <h2 className='text-lg text-amber-500 font-semibold '>Coach Bamboo</h2>
                            <p className='text-base text-gray-200 mb-4'>The Voice Coach</p>
                        </SwiperSlide>
                        <SwiperSlide className='border border-amber-500 rounded-lg p-4'>
                            <img className='bg-amber-500 rounded-full' src={Image4} alt="" />
                            <p className='text-base my-2 text-justify'>Goods naman yung lasa. Mahal nga lang pero goods pang barkada, pizza and alak best combo sheeeesh!. Pag ganito ang nasa babalik balikan talaga recommended sa lahat.</p>

                            <h2 className='text-lg text-amber-500 font-semibold '>Coach Leah</h2>
                            <p className='text-base text-gray-200 mb-4'>The Voice Coach</p>
                        </SwiperSlide>
                        <SwiperSlide className='border border-amber-500 rounded-lg p-4'>
                            <img className='bg-amber-500 rounded-full' src={Image5} alt="" />
                            <p className='text-base my-2 text-justify'>Goods naman yung lasa. Mahal nga lang pero goods pang barkada, pizza and alak best combo sheeeesh!. Pag ganito ang nasa babalik balikan talaga recommended sa lahat.</p>

                            <h2 className='text-lg text-amber-500 font-semibold '>Coach Chito</h2>
                            <p className='text-base text-gray-200 mb-4'>The Voice Coach</p>
                        </SwiperSlide>
                        <SwiperSlide className='border border-amber-500 rounded-lg p-4'>
                            <img className='bg-amber-500 rounded-full' src={Image6} alt="" />
                            <p className='text-base my-2 text-justify'>Goods naman yung lasa. Mahal nga lang pero goods pang barkada, pizza and alak best combo sheeeesh!. Pag ganito ang nasa babalik balikan talaga recommended sa lahat.</p>

                            <h2 className='text-lg text-amber-500 font-semibold '>Coach Martin</h2>
                            <p className='text-base text-gray-200 mb-4'>The Voice Coach</p>
                        </SwiperSlide>
                     </Swiper>
                </div>
                
            </div>
        </div>
    
      );
    }

export default Review