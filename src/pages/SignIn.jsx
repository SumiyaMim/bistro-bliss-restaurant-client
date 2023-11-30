import { Link, useLocation, useNavigate } from "react-router-dom"
import login from '../assets/others/login.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { FaGoogle } from 'react-icons/fa';
import bg from '../assets/others/authentication.png'
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Swal from 'sweetalert2'
import useAuth from "../hooks/useAuth";
import SocialLogin from "../components/SocialLogin";

const SignIn = () => {

    const bgImage = `url(${bg})`;
    const [disabled, setDisabled] = useState(true);
    const { signInUser } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    // sign in user
    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        signInUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'User Signed in Successfully.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
        })
    }

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false);
        }
        else {
            setDisabled(true)
        }
    }

  return (
    <div>
        <Helmet>
            <title>Sign in</title>
        </Helmet>
        <div className='p-12' style={{ backgroundImage: bgImage }}>
            <div className='shadow-xl flex justify-between items-center py-14' style={{ backgroundImage: bgImage }}>
                <div className='w-[480px] mx-auto hidden lg:block'>
                    <img src={login} alt="" />
                </div>
                <div className="w-4/5 lg:w-2/5 mx-auto rounded-md">
                    <h2 className="text-2xl font-bold text-center mb-3">
                    Sign in
                    </h2>
                    <form onSubmit={handleSignIn}>
                    <div className="form-control mb-2">
                        <label className="label">
                        <span className="label-text font-semibold">Email</span>
                        </label>
                        <input
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                        className="input bg-white focus:outline-none rounded placeholder:text-xs text-sm"
                        required
                        />
                    </div>
                    <div className="form-control mb-4">
                        <label className="label">
                        <span className="label-text font-semibold">Password</span>
                        </label>
                        <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        className="input bg-white focus:outline-none rounded placeholder:text-xs text-sm"
                        required
                        />
                    </div>
                    <div className="form-control mb-4">
                        <label className="label">
                            <LoadCanvasTemplate />
                        </label>
                        <input
                        onBlur={handleValidateCaptcha}
                        type="text"
                        name="captcha"
                        placeholder="Type the captcha above"
                        className="input bg-white focus:outline-none rounded placeholder:text-xs text-sm"
                        required
                        />
                    </div>
                    <div className="form-control my-4">
                        <input disabled={disabled} type='submit' value='Sign in' className={`bg-[#D1A054] p-3 w-full rounded-md text-white font-semibold text-sm ${disabled ? 'bg-opacity-70' : ''}`}>
                        </input>
                    </div>
                    <p className="text-[#D1A054] text-center text-xs font-medium mb-3">
                        New here? {" "}
                        <Link to="/signup">
                        <span className="font-semibold">Create a New Account</span>
                        </Link>
                    </p>
                    </form>
                    <p className="text-center text-xs font-medium mb-3">or sign in with</p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
       </div>
    </div>
  )
}

export default SignIn
