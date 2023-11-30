import { Parallax } from 'react-parallax';

const Cover = ({ img, title, showParagraph }) => {
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="menu"
            strength={-200}
        >
            <div className="hero h-[300px] md:h-[500px]">
                <div className="hero-content text-center text-neutral-content">
                    <div className="p-10 md:px-40 md:py-16 mt-16 bg-black bg-opacity-50">
                        <h1 className="text-3xl md:text-5xl text-white font-display font-semibold uppercase">{title}</h1>
                        {showParagraph && (
                            <p className="mt-4 text-white font-display text-xs">Would you like to try a dish?</p>
                        )}                    
                        </div>
                </div>
            </div>
        </Parallax>
    );
};

export default Cover;