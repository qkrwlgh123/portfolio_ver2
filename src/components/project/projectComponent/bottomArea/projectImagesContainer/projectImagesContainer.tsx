import Style from "./projectImagesContainer.style";

import { Navigation, Autoplay, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./swiper.css";

const ProjectImagesContainer = () => {
  return (
    <Style.ImagesContainer>
      <Swiper
        modules={[Navigation, Autoplay, Pagination, A11y]}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper: any) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </Style.ImagesContainer>
  );
};

export default ProjectImagesContainer;
