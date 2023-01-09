import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import avatar from "../assets/avatar.png";

const Review = () => {
  return (
    <section className="">
      <p className="">Happy Client</p>
      <h1 className="">Client's say about us</h1>
      <div className="">
        <Swiper
          loop={true}
          grabCursor={true}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 1,
            },
          }}
          className="mySwiper pt-20"
        >
          <SwiperSlide>
            <div className="flex flex-col justify-center shadow-2xl rounded-lg p-8 ">
              <img src={avatar} alt="dravyafolio" className="w-20 mx-auto" />
              <h3 className="font-semibold ">Omar Gause</h3>
              <p className="text-rose-600 text-xs">Happy Client</p>
              <p className="text-rose-600 text-xs">
                "Everyone working in thge office is very knowledeable about all
                type of dental work and option for your individual needs."
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-center shadow-2xl rounded-lg p-8">
              <img src={avatar} alt="avatar" className="w-20 mx-auto" />
              <h3 className="font-semibold">Omar Gouse</h3>
              <p className="text-rose-600 text-xs">Happy Client</p>
              <p className="text-gray-600 text-xs leading-normal my-2">
                “Everyone working in the office is very knowledgeable about all
                types of dental work and options for your individual needs.”
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col justify-center shadow-2xl rounded-lg p-8">
              <img src={avatar} alt="avatar" className="w-20 mx-auto" />
              <h3 className="font-semibold">Omar Gouse</h3>
              <p className="text-rose-600 text-xs">Happy Client</p>
              <p className="text-gray-600 text-xs leading-normal my-2">
                “Everyone working in the office is very knowledgeable about all
                types of dental work and options for your individual needs.”
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Review;
