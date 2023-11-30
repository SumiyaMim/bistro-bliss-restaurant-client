import SectionTitle from "./SectionTitle"
import featuredImg from '../assets/home/featured.jpg';
import '../style/Featured.css';

const Featured = () => {
  return (
    <section className="featured-item bg-fixed text-white pt-8 mt-10 mb-5 bg-black bg-opacity-60 bg-blend-overlay">
        <SectionTitle subHeading="Check it out" heading="From Our Menu" ></SectionTitle>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-0 pb-20 pt-12 lg:px-36 px-4">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>March 20, 2023</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p className="text-sm text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate expedita hic dolorem, iusto vel suscipit nam excepturi debitis magnam nostrum! Ut eum dignissimos culpa doloremque eligendi consectetur blanditiis laboriosam fugiat ea quia similique quam nisi reprehenderit numquam magnam nemo vitae cupiditate.</p>
                    <button className="px-5 py-2.5 rounded-lg border-0 border-b-2 text-white mt-4">Read More</button>
                </div>
        </div>
    </section>
  )
}

export default Featured
