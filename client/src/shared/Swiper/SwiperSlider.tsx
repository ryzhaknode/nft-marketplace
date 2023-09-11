import React from "react";
import SliderNoCheck from "./SliderNoCheck";
import {INftCardImg} from "../types/INftCardImg";

interface SwiperSliderProps {
    images: INftCardImg[];
}
function SwiperSlider({images}:SwiperSliderProps){
    return (
        <SliderNoCheck images={images}/>
    );
}

export default SwiperSlider;