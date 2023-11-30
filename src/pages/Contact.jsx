import { Helmet } from "react-helmet-async"
import Cover from "../components/Cover"
import contactImg from '../assets/contact/banner.jpg'
import SectionTitle from "../components/SectionTitle"
import { IoLocationSharp } from "react-icons/io5";
import { BiSolidPhoneCall } from "react-icons/bi";
import { HiClock } from "react-icons/hi2";
import { BsSendFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div>
       <Helmet>
            <title>Bistro Bliss Restaurant | Contact</title>
       </Helmet>
       <Cover img={contactImg} title="contact us" showParagraph></Cover>
       <div className="py-10 px-8 lg:px-12">
            <SectionTitle subHeading="Visit Us" heading="OUR LOCATION"></SectionTitle>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mt-12">
                <div className="border flex-1 h-64 w-full">
                    <div className="bg-[#D1A054] p-3 flex justify-center text-white">
                    <BiSolidPhoneCall className="text-2xl"></BiSolidPhoneCall>
                    </div>
                    <div className="text-center bg-[#F3F3F3] mx-8 p-14 mb-8 h-44">
                        <h2 className="font-semibold text-lg mb-2">PHONE</h2>
                        <p className="text-sm text-[#444]">+38 (012) 34 56 789</p>
                    </div>
                </div>
                <div className="border flex-1 h-64 w-full">
                    <div className="bg-[#D1A054] p-3 flex justify-center text-white">
                    <IoLocationSharp className="text-2xl"></IoLocationSharp>
                    </div>
                    <div className="text-center bg-[#F3F3F3] mx-8 p-14 mb-8 h-44">
                        <h2 className="font-semibold text-lg mb-2">ADDRESS</h2>
                        <p className="text-sm text-[#444]">123 ABS Street, Bangladesh</p>
                    </div>
                </div>
                <div className="border flex-1 h-64 w-full">
                    <div className="bg-[#D1A054] p-3 flex justify-center text-white">
                    <HiClock className="text-2xl"></HiClock>
                    </div>
                    <div className="text-center bg-[#F3F3F3] mx-8 p-14 mb-8 h-44">
                        <h2 className="font-semibold text-lg mb-2">WORKING HOURS</h2>
                        <p className="text-sm text-[#444]">Mon - Fri: 08:00 - 22:00</p>
                        <p className="text-sm text-[#444]">Sat - Sun: 10:00 - 23:00</p>
                    </div>
                </div>
            </div>
            <div className="py-20">
                <SectionTitle subHeading="Send Us a Message" heading="CONTACT FORM"></SectionTitle>
                <div className="bg-[#F3F3F3] p-8 lg:p-14">
                    <div className="md:flex gap-7 md:mb-2">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                            <span className="label-text text-base font-semibold text-[#444]">Name*</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter coffee name"
                                className="input input-bordered border-[#E8E8E8] text-sm w-full outline-none focus:outline-none"
                            />
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                            <span className="label-text text-base font-semibold text-[#444]">Email*</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                className="input input-bordered border-[#E8E8E8] text-sm w-full outline-none focus:outline-none"
                            />
                        </div>
                    </div>
                    <div className="form-control w-full mb-2">
                            <label className="label">
                            <span className="label-text text-base font-semibold text-[#444]">Phone*</span>
                            </label>
                            <input
                                type="text"
                                name="phone"
                                placeholder="Enter your phone number"
                                className="input input-bordered border-[#E8E8E8] text-sm w-full outline-none focus:outline-none"
                            />
                    </div>
                    <div className="form-control w-full mb-14">
                            <label className="label">
                            <span className="label-text text-base font-semibold text-[#444]">Message*</span>
                            </label>
                            <textarea
                                name="message"
                                rows={10}
                                placeholder="Write your message here..."
                                className="textarea textarea-bordered resize-none border-[#E8E8E8] text-sm w-full outline-none focus:outline-none py-4"
                            />
                    </div>
                    <div className="flex justify-center">
                       <button className="flex items-center gap-3 px-5 py-2 text-lg font-semibold bg-gradient-to-r from-[#835D23] to-[#B58130] text-white">
                        Send Message
                        <span><BsSendFill></BsSendFill></span>
                        </button>
                    </div>
                </div>
            </div>
       </div>
    </div>
  )
}

export default Contact
