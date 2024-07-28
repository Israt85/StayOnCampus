

const Feature2 = ({pic,title,des}) => {
    return (
        <div className='flex flex-col items-center lg:flex-row justify-center gap-4 pb-8'>
          
            <div className='w-72 text-center lg:text-left lg:w-96 order-2 lg:order-1'>
             <h2 className='text-xl font-bold text-[#5a4044] py-2'>{title}</h2>
             <p>{des}</p>
            </div>
            <div className='border-r-black order-3 lg:order-2 border mx-20'>

            </div>
            <div className='order-1 lg:order-3'>
                <img className='h-40 w-60' src={pic} alt="" />
            </div>
            
        </div>
    );
};

export default Feature2;