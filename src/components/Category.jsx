import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";
import slide1 from '../assets/home/slide1.jpg';
import slide2 from '../assets/home/slide2.jpg';
import slide3 from '../assets/home/slide3.jpg';
import slide4 from '../assets/home/slide4.jpg';
import slide5 from '../assets/home/slide5.jpg';
import SectionTitle from "./SectionTitle";

const Category = () => {
  return (
    <section className="pt-5 pb-5 px-8 lg:px-12">
        <SectionTitle 
            subHeading={"From 11.00am to 10.00pm"}
            heading={"Order Online"}
        ></SectionTitle>
        <Swiper
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides={false}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            <SwiperSlide>
                <img src={slide1} alt="" className="h-[120px] md:h-[300px] lg:h-[400px]"/>
                <h3 className="text-sm md:text-3xl font-display font-semibold uppercase text-center -mt-16 text-white">Salads</h3>
                <p className="mt-20"></p>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide2} alt="" className="h-[120px] md:h-[300px] lg:h-[400px]"/>
                <h3 className="text-sm md:text-3xl font-display font-semibold uppercase text-center -mt-16 text-white">Pizzas</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide3} alt="" className="h-[120px] md:h-[300px] lg:h-[400px]"/>
                <h3 className="text-sm md:text-3xl font-display font-semibold uppercase text-center -mt-16 text-white">Soups</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide4} alt="" className="h-[120px] md:h-[300px] lg:h-[400px]"/>
                <h3 className="text-sm md:text-3xl font-display font-semibold uppercase text-center -mt-16 text-white">Desserts</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide5} alt="" className="h-[120px] md:h-[300px] lg:h-[400px]"/>
                <h3 className="text-sm md:text-3xl font-display font-semibold uppercase text-center -mt-16 text-white">Drinks</h3>
            </SwiperSlide>
        </Swiper>
    </section>
  )
}

export default Category
