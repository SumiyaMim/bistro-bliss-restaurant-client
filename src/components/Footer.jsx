import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-black text-white"> 
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-[#1F2937] text-center py-12">
            <h2 className='text-xl mb-3'>CONTACT US</h2>
            <p className='text-sm mb-1'>123 ABS Street, Uni 21, Bangladesh</p>
            <p className='text-sm mb-1'>+88 123456789</p>
            <p className='text-sm mb-1'>Mon - Fri: 08:00 - 22:00</p>
            <p className='text-sm mb-1'>Sat - Sun: 10:00 - 23:00</p>
        </div>
        <div className="bg-[#111827] text-center py-12">
            <h2 className='text-xl mb-5'>FOLLOW US</h2>
            <p className='text-sm mb-7'>Join us on social media</p>
            <div className='flex items-center text-xl gap-6 justify-center'>
                <i><FaFacebookF></FaFacebookF></i>
                <i><FiInstagram></FiInstagram></i>
                <i><FaTwitter></FaTwitter></i>
            </div>
        </div>
      </div>
      <p className='py-4 text-center text-sm'>Copyright © Bistro Bliss Restaurant. All rights reserved.</p>
    </div>
  )
}

export default Footer
