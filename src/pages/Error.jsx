import error from '../assets/error.gif';
import { TiHome } from "react-icons/ti";
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='mx-auto my-10 md:my-2 lg:my-10 w-[400px] md:w-[500px]'>
            <img src={error} alt="" />
        </div>
        <div>
            <Link to='/'>
                    <button className="flex items-center gap-3 px-5 py-2 text-sm font-semibold bg-gradient-to-r from-[#835D23] to-[#B58130] text-white">
                        Back To Home
                        <span><TiHome className='text-lg'></TiHome></span>
                    </button>
            </Link>
        </div>
    </div>
  )
}

export default Error
