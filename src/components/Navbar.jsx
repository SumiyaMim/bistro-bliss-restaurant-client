import { NavLink, useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from '../hooks/useCart';
import useAdmin from '../hooks/useAdmin';

const Navbar = () => {

    const { user, signOutUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [cart] = useCart();
    const [isAdmin] = useAdmin();
  
    const handleSignOut = (e) => {
      e.preventDefault();
      signOutUser(); 
      navigate('/signin'); 
    };

    const links = (
      <>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
              ? "text-xs md:text-sm font-semibold text-[#EEFF25] uppercase"
              : "text-xs md:text-sm font-semibold text-white uppercase"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/menu"
            className={({ isActive }) =>
              isActive
              ? "text-xs md:text-sm font-semibold text-[#EEFF25] uppercase"
              : "text-xs md:text-sm font-semibold text-white uppercase"
            }
          >
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/shop/offered"
            className={({ isActive }) =>
              isActive
              ? "text-xs md:text-sm font-semibold text-[#EEFF25] uppercase"
              : "text-xs md:text-sm font-semibold text-white uppercase"
            }
          >
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
              ? "text-xs md:text-sm font-semibold text-[#EEFF25] uppercase"
              : "text-xs md:text-sm font-semibold text-white uppercase"
            }
          >
            Contact
          </NavLink>
        </li>
        {
            user && isAdmin && 
            <li>
              <NavLink
              to="/dashboard/admin-home"
              className={({ isActive }) =>
                isActive
                ? "text-xs md:text-sm font-semibold text-[#EEFF25] uppercase"
                : "text-xs md:text-sm font-semibold text-white uppercase"
              }
              >
                Dashboard
              </NavLink>
            </li>
        }
        {
            user && !isAdmin && 
            <li>
              <NavLink
              to="/dashboard/user-home"
              className={({ isActive }) =>
                isActive
                ? "text-xs md:text-sm font-semibold text-[#EEFF25] uppercase"
                : "text-xs md:text-sm font-semibold text-white uppercase"
              }
              >
                Dashboard
              </NavLink>
            </li>
        }
      </>
    );
  
    return (
      <div className='flex justify-center'>
        <div className="navbar fixed z-10 bg-black max-w-7xl bg-opacity-50 py-3 pl-2 md:pl-5 pr-6 md:pr-8 lg:px-12">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current text-white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </label>
              <ul className="menu-sm dropdown-content mt-6 z-[1] p-5 shadow bg-black rounded-box w-52">
                {links}
              </ul>
            </div>
            <div className='hidden lg:block'>
              <div className='flex items-center justify-center gap-2'>
                <div className='text-white font-display'>
                    <div>
                         <h1 className='font-extrabold text-lg'>BISTRO BLISS</h1>
                    </div>
                    <h1 className='uppercase font-semibold text-sm'>R e s t a u r a n t</h1>
                </div>
              </div>
            </div>
          </div>
          <div className='navbar-center lg:hidden flex items-center justify-center gap-2'>
                <div className='text-white font-display'>
                    <div>
                         <h1 className='font-extrabold text-lg'>BISTRO BLISS</h1>
                    </div>
                    <h1 className='uppercase font-semibold text-sm'>R e s t a u r a n t</h1>
                </div>
          </div>
          <div className="navbar-end flex gap-8 items-center">
             <div className="hidden lg:flex">
               <ul className="flex items-center justify-center gap-8 font-medium text-sm menu-horizontal px-1">
                  {links}
               </ul>
              </div>
              <div className='flex items-center gap-4 lg:gap-8'>
                  <NavLink 
                    to="/dashboard/cart"
                    className="text-xs md:text-sm font-semibold text-white uppercase"
                    >
                    <button className="flex items-center">
                        <FaShoppingCart className='mr-1'></FaShoppingCart>
                        <sup className='bg-red-700 py-[9px] px-1.5 rounded-full'>{cart.length}</sup>
                    </button>
                  </NavLink>
                  {user?.email ? (
                    <div className="dropdown dropdown-end">
                      <label tabIndex={0} className="avatar">
                        <div className="w-9 rounded-full mt-1.5">
                          <img src={user.photoURL} alt={user.displayName} />
                        </div>
                      </label>
                      <ul
                        tabIndex={0}
                        className="menu-sm dropdown-content mt-6 z-[1] p-4 bg-black shadow text-center rounded-box w-52"
                      >
                        <li>
                          <button className="text-xs md:text-sm font-semibold text-white uppercase hover:text-[#EEFF25]">
                            {user.displayName}
                          </button>
                        </li>
                        <li>
                          <button onClick={handleSignOut} className="text-xs md:text-sm uppercase font-semibold text-white hover:text-[#EEFF25]">Sign Out</button>
                        </li>
                      </ul>
                    </div>
                  ) : (
                    <NavLink
                        to="/signin"
                        className={({ isActive }) =>
                        isActive
                        ? "text-xs md:text-sm font-semibold text-[#EEFF25] uppercase"
                        : "text-xs md:text-sm font-semibold text-white uppercase"
                        }
                    >
                        Sign in
                    </NavLink>
                )}

              </div>
          </div>
        </div>
      </div>
    );
  };
  
export default Navbar;
