import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle"
import MenuItem from "./MenuItem";
import useMenu from "../hooks/useMenu";

const PopularMenu = () => {

    // const [menu, setMenu] = useState([]);

    // useEffect(() => {
    //     fetch('/menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItems = data.filter(item => item.category === 'popular');
    //             setMenu(popularItems)
    //         })
    // }, [])

    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');

  return (
    <section className="py-5 px-8 lg:px-12">
        <SectionTitle
            heading="From Our Menu"
            subHeading="Check it out"
        ></SectionTitle>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
        </div>
        <div className="flex justify-center">
            <button className="uppercase border-b-2 border-black text-sm px-5 py-2.5 rounded-lg font-medium">view full menu</button>
        </div>
    </section>
  )
}

export default PopularMenu
