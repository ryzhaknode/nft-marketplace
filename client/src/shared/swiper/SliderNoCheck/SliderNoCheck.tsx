// @ts-nocheck

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import cls from './SliderNoCheck.module.scss';
import { classNames } from '../../classNames/classNames';

function SliderNoCheck({ images }: any) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            <Swiper
                loop
                spaceBetween={10}
                navigation
                thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
                modules={[FreeMode, Navigation, Thumbs]}
                className={classNames(`${cls.navArrow} MySwiper2`)}
            >
                {images.map((img, i) => (
                    <SwiperSlide key={i}>
                        <img src={img.url} alt={img.name} />
                    </SwiperSlide>
                ))}
            </Swiper>

            <Swiper
                onSwiper={setThumbsSwiper}
                loop
                spaceBetween={10}
                slidesPerView={4}
                freeMode
                watchSlidesProgress
                modules={[FreeMode, Navigation, Thumbs]}
                className={classNames('mySwiper')}
            >
                {images.map((img, i) => (
                    <SwiperSlide key={i}>
                        <img src={img.url} alt={img.name} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}

export default SliderNoCheck;
