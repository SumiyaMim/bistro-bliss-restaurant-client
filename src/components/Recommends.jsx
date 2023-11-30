import useMenu from "../hooks/useMenu";
import FoodCard from "./FoodCard";
import SectionTitle from "./SectionTitle"
import ShopTab from "./ShopTab";

const Recommends = () => {

    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');

  return (
    <div className="pb-10 px-8 lg:px-12">
      <SectionTitle
            heading="CHEF RECOMMENDS"
            subHeading="Should Try"
       ></SectionTitle>
       <div>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {
                        popular.map(item => <FoodCard
                        key={item._id}
                        item={item}
                        ></FoodCard>)
                    }
            </div>
       </div>
    </div>
  )
}

export default Recommends
