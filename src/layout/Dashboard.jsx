import { NavLink, Outlet, useLocation } from "react-router-dom"
import { FaHome, FaShoppingBag, FaShoppingCart, FaUsers } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoMenuSharp } from "react-icons/io5";
import useAdmin from "../hooks/useAdmin";
import { ImSpoonKnife } from "react-icons/im";
import { FaListUl } from "react-icons/fa6";
import { GiWallet } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";

const Dashboard = () => {

    const location = useLocation();

    // get isAdmin value from the database
    const [isAdmin] = useAdmin();

  return (
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto">
        {/* dashboard side bar */}
        <div className="md:w-64 min-h-screen bg-[#D1A054] font-display py-8 px-6">
            <div className="pb-6">
                <div>
                    <h1 className='font-extrabold text-lg'>BISTRO BLISS</h1>
                </div>
                <h1 className='uppercase font-semibold text-sm'>R e s t a u r a n t</h1>
            </div>
            <ul className="flex gap-4 flex-col">
                {isAdmin ? 
                <>
                <li>
                    <NavLink to="/dashboard/admin-home"
                     className={({ isActive }) =>
                     isActive
                     ? "flex items-center gap-2.5 text-white"
                     : "flex items-center gap-2.5 text-black"
                     }
                     >
                    <AiFillHome className="text-xl"></AiFillHome>
                    <p className="text-sm font-bold mt-1">Admin Home</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/add-items"
                     className={({ isActive }) =>
                     isActive
                     ? "flex items-center gap-2.5 text-white"
                     : "flex items-center gap-2.5 text-black"
                     }
                     >
                    <ImSpoonKnife className="text-xl"></ImSpoonKnife>
                    <p className="text-sm font-bold mt-1">Add Items</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/manage-items"
                     className={({ isActive }) =>
                     isActive
                     ? "flex items-center gap-2.5 text-white"
                     : "flex items-center gap-2.5 text-black"
                     }
                     >
                    <FaListUl className="text-xl"></FaListUl>
                    <p className="text-sm font-bold mt-0.5">Manage Items</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/users"
                     className={({ isActive }) =>
                     isActive
                     ? "flex items-center gap-2.5 text-white"
                     : "flex items-center gap-2.5 text-black"
                     }
                     >
                    <FaUsers className="text-xl"></FaUsers>
                    <p className="text-sm font-bold mt-1">All Users</p>
                    </NavLink>
                </li>
                </> 
                :
                <>
                <li>
                    <NavLink to="/dashboard/user-home"
                     className={({ isActive }) =>
                     isActive
                     ? "flex items-center gap-2.5 text-white"
                     : "flex items-center gap-2.5 text-black"
                     }
                     >
                    <AiFillHome className="text-xl"></AiFillHome>
                    <p className="text-sm font-bold mt-1">User Home</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/cart"
                     className={({ isActive }) =>
                     isActive
                     ? "flex items-center gap-2.5 text-white"
                     : "flex items-center gap-2.5 text-black"
                     }
                     >
                    <FaShoppingCart className="text-xl"></FaShoppingCart>
                    <p className="text-sm font-bold mt-1">My Cart</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/payment-history"
                     className={({ isActive }) =>
                     isActive
                     ? "flex items-center gap-2.5 text-white"
                     : "flex items-center gap-2.5 text-black"
                     }
                     >
                    <GiWallet className="text-xl"></GiWallet>
                    <p className="text-sm font-bold mt-1">Payment History</p>
                    </NavLink>
                </li>
                </>}
                <hr className="my-5"></hr>
                <li>
                    <NavLink to="/"
                     className={({ isActive }) =>
                     isActive
                     ? "flex items-center gap-2.5 text-white"
                     : "flex items-center gap-2.5 text-black"
                     }
                     >
                    <FaHome className="text-xl"></FaHome>
                    <p className="text-sm font-bold mt-1">Home</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/menu"
                     className={({ isActive }) =>
                     isActive
                     ? "flex items-center gap-2.5 text-white"
                     : "flex items-center gap-2.5 text-black"
                     }
                     >
                    <IoMenuSharp className="text-xl"></IoMenuSharp>
                    <p className="text-sm font-bold mt-0.5">Menu</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/shop/offered"
                     className={({ isActive }) =>
                     isActive
                     ? "flex items-center gap-2.5 text-white"
                     : "flex items-center gap-2.5 text-black"
                     }
                     >
                    <FaShoppingBag className="text-xl"></FaShoppingBag>
                    <p className="text-sm font-bold mt-1.5">Shop</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact"
                     className={({ isActive }) =>
                     isActive
                     ? "flex items-center gap-2.5 text-white"
                     : "flex items-center gap-2.5 text-black"
                     }
                     >
                    <MdEmail className="text-xl"></MdEmail>
                    <p className="text-sm font-bold mt-1.5">Contact</p>
                    </NavLink>
                </li>
            </ul>
        </div>
        {/* dashboard content */}
        <div className={`flex-1 py-8 px-8 lg:px-28 ${location.pathname.startsWith('/dashboard/add-items') || location.pathname.startsWith('/dashboard/update-item') ? 'bg-white' : 'bg-[#F6F6F6]'}`}>
            <Outlet></Outlet>
        </div>
    </div>
  )
}

export default Dashboard
