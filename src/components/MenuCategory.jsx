import { Link } from "react-router-dom";
import Cover from "./Cover";
import MenuItem from "./MenuItem";

const MenuCategory = ({items, title, img, desc}) => {
    return (
        <div className='py-10'>
           {title && img && <Cover img={img} title={title} desc={desc}></Cover>}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Link to={`/shop/${title}`}>
                <div className="flex justify-center mt-10">
                    <button className="uppercase border-b-2 border-black text-sm px-5 py-2.5 rounded-lg font-medium">ORDER YOUR FAVORITE FOOD</button>
                </div>            
            </Link>
        </div>
    );
};

export default MenuCategory;