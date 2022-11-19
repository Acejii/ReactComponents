// npm i swiper

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// Import file css cho carousel
import "./carousel.scss";
// import required modules
import { Pagination, Navigation, Autoplay, Keyboard } from "swiper";
const Carousel = () => {
  return (
    <div className="swiper__wrapper">
      <Swiper
        keyboard={{
          enabled: true,
        }}
        speed={1000}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        slidesPerView={2}
        slidesPerGroupSkip={1}
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide-wrapper">
            <img
              src="https://allimages.sgp1.digitaloceanspaces.com/tipeduvn/2022/06/1656018670_140_Hinh-Nen-Desktop-Chu-De-Thien-Nhien-Dep.jpg"
              alt="banner"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-wrapper">
            <img
              src="https://thuthuatphanmem.vn/uploads/2018/05/23/wallpaper-4k-hinh-nen-4k-anh-nang-chieu-tren-mat-nuoc-trong-_4owtm_101257944.jpg"
              alt="banner"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-wrapper">
            <img
              src="https://diemthidh2013.files.wordpress.com/2013/08/hinh-nen.jpg"
              alt="banner"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
