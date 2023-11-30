const MenuItem = ({item}) => {

    const {name, image, price, recipe} = item;

    return (
        <div className="flex justify-between space-x-2">
            <div className="flex  gap-4">
                <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[90px] h-[90px] md:h-[50px] md:w-[50px] lg:h-[60px] lg:w-[60px]" src={image} alt="" />
                <div>
                    <h3 className="uppercase text-[#151515] font-semibold text-sm lg:text-base mb-1 font-display">{name} ----------</h3>
                    <p className="text-[#737373] text-xs">{recipe}</p>
                </div>
            </div>
            <p className="text-[#BB8506]">${price}</p>
        </div>
    );
};

export default MenuItem;