import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectCube, Navigation, Pagination } from "swiper/modules";

export default function SwiperSlider({ children }) {
  return (
    <Swiper
      effect={"cube"}
      grabCursor={true}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 10,
        shadowScale: 0.94,
      }}
      navigation={true}
      pagination={true}
      modules={[EffectCube, Pagination, Navigation]}
      className="mySwiper"
    >
      {children}
    </Swiper>
  );
}
