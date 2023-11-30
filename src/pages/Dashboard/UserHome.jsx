import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth"
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { IoWallet } from "react-icons/io5";
import { BsShopWindow } from "react-icons/bs";
import { FaCartShopping } from "react-icons/fa6";

const UserHome = () => {

  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: stats = {} } = useQuery({
    queryKey: ['admin-stats'],
    queryFn: async () => {
        const res = await axiosSecure.get('/user-stats');
        return res.data;
    }
  });

  const { data: activity = [] } = useQuery({
    queryKey: ['payments', user.email],
    queryFn: async () => {
        const res = await axiosSecure.get(`/payments/${user.email}`)
        return res.data;
    }
  })

  return (
    <div>
      <h2 className="text-2xl uppercase font-display font-bold mb-6">Hi, Welcome Back!</h2>
      <div className="grid grid-cols-2 lg:grid-cols-2 gap-10">
        <div className="bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] text-white flex items-center gap-5 p-6 rounded-md">
            <div>
              <IoWallet className="text-4xl"></IoWallet>
            </div>
            <div>
              <div className="text-2xl font-bold">{stats.menuItems}</div>
              <div>Menu</div>
            </div>
        </div>
        <div className="bg-gradient-to-r from-[#FE4880] to-[#FECDE9] text-white flex items-center gap-5 p-6 rounded-md">
            <div>
              <BsShopWindow className="text-4xl"></BsShopWindow>
            </div>
            <div>
              <div className="text-2xl font-bold">{stats.totalCategories}</div>
              <div>Shop</div>
            </div>
        </div>
      </div>
      <div className="mt-8 flex flex-col lg:flex-row items-center gap-5 font-display bg-[#FEF9C3]">
        <div className="p-16 border-b-2 lg:border-b-0 lg:border-r-2 border-[#D1A054] w-full lg:w-1/2 bg-[#FFEDD5]">
          <div className="flex flex-col justify-center items-center gap-5">
              <label tabIndex={0} className="avatar">
                <div className="w-32 rounded-full border-2 border-[#D1A054]">
                  <img src={user.photoURL} alt={user.displayName} />
                </div>
              </label>
              <h2 className="text-center uppercase font-bold text-lg">{user.displayName}</h2>
          </div>
        </div>
        <div className="lg:w-1/2 p-16">
          <h1 className="uppercase font-extrabold text-xl mb-5">Your Activities</h1>
          <div className="text-[#0088FE] font-bold text-base flex items-center gap-2 mb-1">
            <FaCartShopping></FaCartShopping>
            <h3>Orders: {activity.length}</h3>
          </div>
          <div className="text-[#FF8042] font-bold text-base flex items-center gap-2">
            <IoWallet></IoWallet>
            <h3>Payments: {activity.length}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserHome
