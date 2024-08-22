import Style from "./projectImagesContainer.style";

import { Navigation, Autoplay, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./swiper.css";

const ProjectImagesContainer = ({ imageList }: { imageList: string[] }) => {
  return (
    <Style.ImagesContainer>
      <Swiper
        modules={[Navigation, Autoplay, Pagination, A11y]}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
        navigation
        pagination={{ clickable: true }}
      >
        {imageList.map((image) => (
          <SwiperSlide key={image}>
            <img src={image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Style.ImagesContainer>
  );
};

export default ProjectImagesContainer;
