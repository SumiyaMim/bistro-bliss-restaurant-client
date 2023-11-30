import { Parallax } from 'react-parallax';
import aboutImg from '../assets/home/chef-service.jpg'

const About = () => {
  return (
    <div className="px-8 lg:px-12 py-10">
       <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={aboutImg}
            bgImageAlt="menu"
            strength={-200}
        >
            <div className="hero md:h-[400px] lg:h-[450px]">
                <div className="hero-content text-center text-neutral-content">
                    <div className="bg-white max-w-xl lg:max-w-4xl px-16 py-10 lg:py-16">
                        <h1 className="text-3xl text-[#151515] font-display font-medium uppercase">Bistro Bliss</h1>
                        <p className="mt-4 text-xs normal-case text-[#151515]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae officiis magni nostrum. Blanditiis quo eius veniam deserunt perferendis quibusdam, quas accusamus, tempore praesentium dolorum cumque!</p>
                        </div>
                </div>
            </div>
        </Parallax>
    </div>
  )
}

export default About
