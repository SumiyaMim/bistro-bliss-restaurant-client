import { Helmet } from "react-helmet-async"
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {

    const {name, category, recipe, price, _id} = useLoaderData();
    const { register, handleSubmit } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        // console.log(data)
        // image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        // console.log(res.data)

        if (res.data.success) {
            // now send the menu item data to the server with the image url
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
            console.log(menuRes.data)
            if(menuRes.data.modifiedCount > 0){
                // show success popup
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `${data.name} is updated to the menu.`,
                    showConfirmButton: false,
                    timer: 1500
                  });
                navigate(-1);
            }
        }
        // console.log(res.data)
    }

  return (
    <div>
      <Helmet>
            <title>Dashboard | Update Item</title>
       </Helmet>
        <div className="mx-auto text-center md:w-1/2 lg:w-4/12 my-8">
            <h3 className="text-2xl uppercase font-medium">UPDATE ITEM</h3>
        </div>
        <div className="bg-[#F3F3F3] p-8 lg:p-14 mt-16">
           <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full mb-2">
                    <label className="label">
                    <span className="label-text text-base font-semibold text-[#444]">Recipe name*</span>
                    </label>
                    <input
                        type="text"
                        defaultValue={name}
                        {...register('name', { required: true })}
                        placeholder="Recipe name"
                        className="input input-bordered border-[#E8E8E8] text-sm w-full outline-none focus:outline-none"
                    />
                </div>
                <div className="md:flex gap-7 md:mb-2">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                        <span className="label-text text-base font-semibold text-[#444]">Category*</span>
                        </label>
                        <select defaultValue={category} {...register('category', { required: true })}
                        className="select select-bordered border-[#E8E8E8] text-sm w-full outline-none focus:outline-none"
                        >
                        <option disabled value="default">Select a category</option>
                        <option value="offered">Offered</option>
                        <option value="salad">Salad</option>
                        <option value="pizza">Pizza</option>
                        <option value="soup">Soup</option>
                        <option value="dessert">Dessert</option>
                        </select>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                        <span className="label-text text-base font-semibold text-[#444]">Price*</span>
                        </label>
                        <input
                            type="number"
                            defaultValue={price}
                            placeholder="Price"
                            {...register('price', { required: true })}                            
                            className="input input-bordered border-[#E8E8E8] text-sm w-full outline-none focus:outline-none"
                        />
                    </div>
                </div>
                <div className="form-control w-full mb-6">
                    <label className="label">
                    <span className="label-text text-base font-semibold text-[#444]">Recipe Details*</span>
                    </label>
                    <textarea
                        defaultValue={recipe}
                        {...register('recipe')}
                        rows={10}
                        placeholder="Recipe Details"
                        className="textarea textarea-bordered resize-none border-[#E8E8E8] text-sm w-full outline-none focus:outline-none py-4"
                    />
                </div>
                <div className="form-control w-full my-6">
                    <input {...register('image', { required: true })} type="file" className="file-input file-input-md normal-case w-full focus:outline-none"/>
                </div>
                <div>
                    <div className="flex justify-center">
                        <button className="px-5 py-2 text-base font-semibold bg-gradient-to-r from-[#835D23] to-[#B58130] text-white">
                            Update Item
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default UpdateItem
