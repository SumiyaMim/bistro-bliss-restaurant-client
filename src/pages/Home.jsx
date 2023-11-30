import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner"
import Category from "../components/Category"
import Contact from "../components/Contact"
import Featured from "../components/Featured"
import PopularMenu from "../components/PopularMenu"
import Testimonials from "../components/Testimonials"
import Recommends from "../components/Recommends";
import About from "../components/About";

const Home = () => {
  return (
    <div>
       <Helmet>
            <title>Bistro Bliss Restaurant | Home</title>
       </Helmet>
      <Banner></Banner>
      <Category></Category>
      <About></About>
      <PopularMenu></PopularMenu>
      <Contact></Contact>
      <Recommends></Recommends>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  )
}

export default Home
