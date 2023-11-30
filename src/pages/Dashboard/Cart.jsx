import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Cart = () => {

  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const axiosSecure = useAxiosSecure();

  const handleDelete = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete it!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
            axiosSecure.delete(`/carts/${id}`)
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your item has been deleted.",
                            icon: "success"
                        });
                    }
                })
        }
    });
  }

  return (
    <div>
        <Helmet>
            <title>Dashboard | My Cart</title>
       </Helmet>
        <div className="mx-auto text-center md:w-1/2 lg:w-4/12 my-8">
            <p className="text-[#D99904] italic text-sm font-medium mb-3">--- My Cart ---</p>
            <h3 className="text-2xl uppercase font-medium border-y-4 py-4">WANNA ADD MORE?</h3>
        </div>
        <div className="bg-white p-5 md:p-8 lg:p-12">
          <div className="flex justify-between items-center mb-10 font-display font-extrabold">
            <h2 className="text-sm md:text-base lg:text-xl">Total orders: {cart.length}</h2>
            <h2 className="text-sm md:text-base lg:text-xl">Total Price: ${totalPrice}</h2>
            {cart.length ? 
            <Link to="/dashboard/payment">
            <button className="bg-[#D1A054] text-white px-3 py-2 rounded-md">Pay</button>
            </Link>
            :
            <button disabled className="bg-[#dbdbdb] text-white px-3 py-2 rounded-md">Pay</button>        
            }
          </div>
          <div className="overflow-x-auto rounded-t-lg">
                    <table className="table w-full">
                        {/* head */}
                        <thead className="bg-[#D1A054]  uppercase text-white">
                            <tr>
                                <th></th>
                                <th className="font-medium">Image</th>
                                <th className="font-medium">Name</th>
                                <th className="font-medium">Price</th>
                                <th className="font-medium">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item, index) => <tr key={item._id}>
                                    <th>
                                        {index + 1}
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask w-12 h-12">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-[#737373] text-xs">
                                        {item.name}
                                    </td>
                                    <td className="text-[#737373] text-xs">${item.price}</td>
                                    <th>
                                        <button
                                        onClick={() => handleDelete(item._id)}
                                        className="bg-[#B91C1C] p-3 rounded-md"
                                        >
                                            <FaTrashAlt className="text-white text-sm"></FaTrashAlt>
                                        </button>
                                    </th>
                                </tr>)
                            }


                        </tbody>
                    </table>
          </div>
        </div>
    </div>
  )
}

export default Cart
