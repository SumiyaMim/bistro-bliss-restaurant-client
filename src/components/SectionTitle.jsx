const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-8">
            <p className="text-[#D99904] italic text-sm font-medium mb-3">--- {subHeading} ---</p>
            <h3 className="text-2xl uppercase font-medium border-y-4 py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;