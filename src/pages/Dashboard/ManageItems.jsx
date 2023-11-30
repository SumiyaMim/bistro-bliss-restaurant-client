import { Helmet } from "react-helmet-async"
import useMenu from "../../hooks/useMenu";
import { FaTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {

    const [menu, loading, refetch] = useMenu();
    const axiosSecure = useAxiosSecure();

    const handleDeleteItem = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete it!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Delete"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`);
                // console.log(res.data);
                if (res.data.deletedCount > 0) {
                    // refetch to update the ui
                    refetch();
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${item.name} has been deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
        });
    }

  return (
    <div>
       <Helmet>
            <title>Dashboard | Manage Items</title>
       </Helmet>
        <div className="mx-auto text-center md:w-1/2 lg:w-4/12 my-8">
            <p className="text-[#D99904] italic text-sm font-medium mb-3">--- Hurry Up! ---</p>
            <h3 className="text-2xl uppercase font-medium border-y-4 py-4">MANAGE ALL ITEMS</h3>
        </div>
        <div className="bg-white p-5 md:p-8 lg:p-12">
          <h2 className="text-sm md:text-base lg:text-xl font-display font-extrabold mb-5">Total Items: {menu?.length}</h2>
          <div className="overflow-x-auto rounded-t-lg">
            <table className="table w-full">
                {/* head */}
                <thead className="bg-[#D1A054] uppercase text-white">
                    <tr>
                        <th></th>
                        <th className="font-medium">Image</th>
                        <th className="font-medium">Name</th>
                        <th className="font-medium">Price</th>
                        <th className="font-medium">Action</th>
                        <th className="font-medium">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        menu.map((item, index) => <tr key={item._id}>
                            <th>{index + 1}</th>
                            <td>
                               <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className="text-[#737373] text-xs">{item.name}</td>
                            <td className="text-[#737373] text-xs">${item.price}</td>
                            <td>
                                <Link to={`/dashboard/update-item/${item._id}`}>
                                    <button
                                    className="bg-[#D1A054] p-3 rounded-md"
                                    >
                                    <FiEdit className="text-white text-sm"></FiEdit>
                                    </button>
                                </Link>
                            </td>
                            <td>
                                <button
                                onClick={() => handleDeleteItem(item)}
                                className="bg-[#B91C1C] p-3 rounded-md"
                                >
                                <FaTrashAlt className="text-white text-sm"></FaTrashAlt>
                                </button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
          </div>
        </div>
    </div>
  )
}

export default ManageItems
