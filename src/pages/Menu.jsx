import { Helmet } from "react-helmet-async"
import Cover from "../components/Cover"
import menuImg from '../assets/menu/banner3.jpg'
import dessertImg from '../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../assets/menu/pizza-bg.jpg'
import soupImg from '../assets/menu/soup-bg.jpg'
import saladImg from '../assets/menu/salad-bg.jpg'
import useMenu from "../hooks/useMenu";
import SectionTitle from "../components/SectionTitle";
import MenuCategory from "../components/MenuCategory";

const Menu = () => {

    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');

  return (
    <div>
       <Helmet>
            <title>Bistro Bliss Restaurant | Menu</title>
       </Helmet>
       <Cover img={menuImg} title="our menu" showParagraph></Cover>
       <div className="py-10">
          <SectionTitle subHeading="Don't miss" heading="Today's Offer"></SectionTitle>
          <div className="px-8 lg:px-12">
                <MenuCategory items={offered} title="offered"></MenuCategory>
                <MenuCategory items={dessert} title="dessert" img={dessertImg}></MenuCategory>
                <MenuCategory items={pizza} title="pizza" img={pizzaImg}></MenuCategory>
                <MenuCategory items={salad} title="salad" img={saladImg}></MenuCategory>
                <MenuCategory items={soup} title="soup" img={soupImg}></MenuCategory>
          </div>
       </div>
    </div>
  )
}

export default Menu
