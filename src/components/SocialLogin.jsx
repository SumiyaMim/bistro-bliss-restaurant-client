import { FaGoogle } from 'react-icons/fa';
import useAxiosPublic from '../hooks/useAxiosPublic';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {

  const axiosPublic = useAxiosPublic();
  const { googleSignIn } = useAuth();
  const navigate = useNavigate();

  // handle google sign in
  const handleGoogleSignIn = () => {
    googleSignIn()
    .then(result =>{
        // create user entry in the database
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName
        }
        axiosPublic.post('/users', userInfo)
        .then((result) => {
          navigate('/');
        })
    })
    .catch((error) => {
        console.error(error);
    });
  };

  return (
    <div className="flex justify-center mx-auto">
        <button onClick={handleGoogleSignIn} className="border-[1.5px] border-black p-1.5 rounded-full">
            <FaGoogle className="text-sm"></FaGoogle>
        </button>
    </div>
  )
}

export default SocialLogin
