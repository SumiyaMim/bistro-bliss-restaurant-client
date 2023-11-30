import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import quote from '../assets/quote.png'
import useAxiosSecure from "../hooks/useAxiosSecure";

const Testimonials = () => {

    const [reviews, setReviews] = useState([]);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        axiosSecure.get('/reviews')
        .then(res => setReviews(res.data))

        // fetch('https://bistro-bliss-restaurant-server.vercel.app/reviews')
        //     .then(res => res.json())
        //     .then(data => setReviews(data))
    }, [])

  return (
    <section className="pt-5 pb-20">
        <SectionTitle
                subHeading="What Our Client Say"
                heading='Testimonials'
        ></SectionTitle>
        <div className="lg:w-4/5 mx-auto">
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className="flex flex-col items-center mx-24 my-3">
                            <Rating
                                style={{ maxWidth: 150 }}
                                value={review.rating}
                                readOnly
                            />
                            <img src={quote} alt="" className="w-20 h-20 mt-8"/>
                            <p className="py-8 text-center text-sm">{review.details}</p>
                            <h3 className="text-2xl uppercase text-[#CD9003]">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    </section>
  )
}

export default Testimonials
