import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useCart from "../hooks/useCart";

const FoodCard = ({item}) => {

    const {name, image, price, recipe, _id} = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();

    const handleAddToCart = () => {
        if (user && user.email) {
            //send cart item to the database
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts', cartItem)
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${name} added to your cart`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    // refetch cart to update the cart items count
                    refetch();
                }
            })
        }
        else {
            Swal.fire({
                title: "You are not Signed In",
                text: "Please sign in to add to the cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Sign in"
            }).then((result) => {
                if (result.isConfirmed) {
                    //   send the user to the login page
                    navigate('/signin', { state: { from: location } })
                }
            });
        }
    }

    return (
        <div className="card bg-[#F3F3F3] rounded-none">
            <figure><img src={image} alt="" className="w-full h-52"/></figure>
            <p className="absolute right-0 mr-4 mt-4 px-5 py-2 text-sm font-semibold bg-slate-900 text-white">${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="text-lg font-bold">{name}</h2>
                <p className="text-justify text-xs text-[#737373]">{recipe}</p>
                <div className="card-actions justify-end">
                    <button  onClick={handleAddToCart} className="bg-[#E8E8E8] rounded-md text-sm text-[#BB8506] px-6 py-3 border-b-2 border-[#BB8506] uppercase font-semibold mt-5 hover:bg-black">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
