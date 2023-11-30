import { Helmet } from "react-helmet-async"
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {

    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    // make admin
    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res =>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch();
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }

    // delete user
    const handleDeleteUser = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete it!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Delete"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "User has been deleted.",
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
            <title>Dashboard | All Users</title>
       </Helmet>
        <div className="mx-auto text-center md:w-1/2 lg:w-4/12 my-8">
            <p className="text-[#D99904] italic text-sm font-medium mb-3">--- How many?? ---</p>
            <h3 className="text-2xl uppercase font-medium border-y-4 py-4">MANAGE ALL USERS</h3>
        </div>
        <div className="bg-white p-5 md:p-8 lg:p-12">
          <h2 className="text-sm md:text-base lg:text-xl font-display font-extrabold mb-5">Total Users: {users?.length}</h2>
          <div className="overflow-x-auto rounded-t-lg">
            <table className="table w-full">
                {/* head */}
                <thead className="bg-[#D1A054]  uppercase text-white">
                    <tr>
                        <th></th>
                        <th className="font-medium">Name</th>
                        <th className="font-medium">Email</th>
                        <th className="font-medium">Role</th>
                        <th className="font-medium">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => <tr key={user._id}>
                            <th>{index + 1}</th>
                            <td className="text-[#737373] text-xs">{user.name}</td>
                            <td className="text-[#737373] text-xs">{user.email}</td>
                            <td>
                                {
                                    user.role === 'admin' ? <p className="text-[#737373] text-xs">Admin</p> 
                                    : 
                                    <button
                                    onClick={() => handleMakeAdmin(user)}
                                    className="bg-[#D1A054] p-3 rounded-md"
                                    >
                                        <FaUsers className="text-white text-sm"></FaUsers>
                                    </button>
                                }
                            </td>
                            <td>
                                <button
                                    onClick={() => handleDeleteUser(user)}
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

export default AllUsers
