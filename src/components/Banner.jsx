import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import banner1 from '../assets/home/01.jpg';
import banner2 from '../assets/home/02.jpg';
import banner3 from '../assets/home/03.png';
import banner4 from '../assets/home/04.jpg';
import banner5 from '../assets/home/05.png';
import banner6 from '../assets/home/05.png';

const Banner = () => {
  return (
    <div>
      <Carousel showStatus={false} className='text-center'>
        <div>
          <img src={banner1} alt="Banner 1"/>
        </div>
        <div>
          <img src={banner2} alt="Banner 2"/>
        </div>
        <div>
          <img src={banner3} alt="Banner 3"/>
        </div>
        <div>
          <img src={banner4} alt="Banner 4"/>
        </div>
        <div>
          <img src={banner5} alt="Banner 5"/>
        </div>
        <div>
          <img src={banner6} alt="Banner 6"/>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
