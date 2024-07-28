

const Feature = ({pic,title,des}) => {
    return (
        <div className='flex flex-col items-center lg:flex-row justify-center gap-4 pb-8'>
           <div className='order-1 '>
            <img className='h-40 w-60' src={pic} alt="" />
        </div>
        <div className='order-3 lg:order-2 border-r-black border mx-20'>

        </div>
        <div className='w-72 text-center lg:text-left lg:w-96 order-2 lg:order-3'>
         <h2 className='text-xl font-bold text-[#5a4044] py-2'>{title}</h2>
         <p>{des}</p>
        </div>
        
       
        
    </div>
    
        
    );
};

export default Feature;