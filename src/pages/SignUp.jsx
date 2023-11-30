import { Link, useNavigate } from "react-router-dom"
import login from '../assets/others/login.png'
import { FaGoogle } from 'react-icons/fa';
import bg from '../assets/others/authentication.png'
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import SocialLogin from "../components/SocialLogin";

const SignUp = () => {

    const axiosPublic = useAxiosPublic();
    const bgImage = `url(${bg})`;
    const { createUser, handleUpdateProfile, signOutUser } = useAuth();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();

    // create user
    const onSubmit = data => {
        // console.log(data);
        createUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            handleUpdateProfile(data.name, data.photo)
                .then(() => {

                    // create user entry in the database
                    const userInfo = {
                        name: data.name,
                        email: data.email
                    }
                    axiosPublic.post('/users', userInfo)
                    .then(res => {
                        if (res.data.insertedId) {
                            // console.log('user added to the database')
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'User created account successfully.',
                                showConfirmButton: false,
                                timer: 1500
                            });
                            // console.log('user profile info updated')
                            signOutUser(); 
                            navigate('/signin');
                        }
                    })
                })
                .catch(error => console.log(error))
        })
    }

  return (
    <div>
        <Helmet>
            <title>Sign up</title>
        </Helmet>
        <div className='p-12' style={{ backgroundImage: bgImage }}>
            <div className='shadow-xl flex justify-between items-center py-14' style={{ backgroundImage: bgImage }}>
                <div className="w-4/5 lg:w-2/5 mx-auto rounded-md">
                    <h2 className="text-2xl font-bold text-center mb-3">
                    Sign up
                    </h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control mb-2">
                        <label className="label">
                        <span className="label-text font-semibold">Name</span>
                        </label>
                        <input
                        type="text"
                        {...register("name", { required: true })}
                        name="name"
                        placeholder="Enter your name"
                        className="input bg-white focus:outline-none rounded placeholder:text-xs text-sm"
                        />
                        {errors.name && <span className="text-red-600 text-xs font-medium mt-1">Name is required</span>}
                    </div>
                    <div className="form-control mb-2">
                        <label className="label">
                        <span className="label-text font-semibold">Email</span>
                        </label>
                        <input
                        type="email"
                        {...register("email", { required: true })}
                        name="email"
                        placeholder="Enter your email address"
                        className="input bg-white focus:outline-none rounded placeholder:text-xs text-sm"
                        />
                        {errors.email && <span className="text-red-600 text-xs font-medium mt-1">Email is required</span>}
                    </div>
                    <div className="form-control mb-2">
                        <label className="label">
                        <span className="label-text font-semibold">Photo</span>
                        </label>
                        <input
                        type="text"
                        {...register("photo", { required: true })}
                        name="photo"
                        placeholder="Enter your photoURL"
                        className="input bg-white focus:outline-none rounded placeholder:text-xs text-sm"
                        />
                        {errors.photo && <span className="text-red-600 text-xs font-medium mt-1">Photo is required</span>}
                    </div>
                    <div className="form-control mb-4">
                        <label className="label">
                        <span className="label-text font-semibold">Password</span>
                        </label>
                        <input
                        type="password"
                        {...register("password", {
                            required: true,
                            minLength: 6,
                            maxLength: 20,
                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                        })}
                        name="password"
                        placeholder="Enter your password"
                        className="input bg-white focus:outline-none rounded placeholder:text-xs text-sm"
                        />
                        {errors.password?.type === 'required' && <p className="text-red-600 text-xs font-medium mt-1">Password is required</p>}
                        {errors.password?.type === 'minLength' && <p className="text-red-600 text-xs font-medium mt-1">Password must be 6 characters</p>}
                        {errors.password?.type === 'maxLength' && <p className="text-red-600 text-xs font-medium mt-1">Password must be less than 20 characters</p>}
                        {errors.password?.type === 'pattern' && <p className="text-red-600 text-xs font-medium mt-1">Password must have one Uppercase one lower case, one number and one special character.</p>}
                    </div>
                    <div className="form-control my-4">
                        <button type='submit' className="bg-[#D1A054] p-3 w-full rounded-md text-white font-semibold text-sm">
                        Sign up
                        </button>
                    </div>
                    <p className="text-[#D1A054] text-center text-xs font-medium mb-3">
                        Already registered? {" "}
                        <Link to="/signin">
                        <span className="font-semibold">Go to sign in</span>
                        </Link>
                    </p>
                    </form>
                    <p className="text-center text-xs font-medium mb-3">or sign up with</p>
                    <SocialLogin></SocialLogin>
                </div>
                <div className='w-[480px] mx-auto hidden lg:block'>
                    <img src={login} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp
