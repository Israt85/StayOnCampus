import img1 from '../../../assets/mission.webp'
const Mission = () => {
    return (
        <div>
              <h1 className="text-3xl text-center font-bold my-6" >Mission of StayOnCampus</h1>
              <div className='gap-6 flex lg:flex-row flex-col justify-evenly'>
        <div className='w-full'>
            <img className='relative py-6 h-[450px] w-full' src={img1} alt="" />
           <div className='flex flex-col'>
             <div className='absolute opacity-80 -mt-96 ml-6 w-[350px] h-[150px] bg-[#5a4044] rounded-3xl'>
            <div className='text-white mx-6 my-4'>
                <p className='text-xl'>Quality Living Spaces
               </p>
               <p className='text-white text-sm'> 
               Our well-maintained properties are designed to provide an optimal living environment where students can focus on their studies and personal growth.
               <div data-aos="zoom-in" data-aos-duration="2000">

</div>
               </p>
            </div>
            </div>
            <div className='absolute opacity-80 -mt-48 ml-6 w-[350px] h-[150px] bg-[#5a4044] rounded-3xl'>
            <div className='text-white mx-6 my-4'>
                <p className='text-xl'>Safety and Security
               </p>
               <p className='text-white text-sm'> 
               Ensuring the safety and well-being of our residents is our highest priority and giving students and their families peace of mind.
               <div data-aos="zoom-in" data-aos-duration="2000">

</div>
               </p>
            </div>
            </div>

            <div className='absolute opacity-80 -mt-48 ml-96 w-[350px] h-[150px] bg-[#5a4044] rounded-3xl'>
            <div className='text-white mx-6 my-4'>
                <p className='text-xl'>Community Building
               </p>
               <p className='text-white text-sm'> 
               we aim to foster connections and friendships among our residents, creating a supportive network that lasts a lifetime.
               <div data-aos="zoom-in" data-aos-duration="2000">

</div>
               </p>
            </div>
            </div>
            <div className='absolute opacity-80 -mt-96 ml-96 w-[350px] h-[150px] bg-[#5a4044] rounded-3xl'>
            <div className='text-white mx-6 my-4'>
                <p className='text-xl'>Sustainable Living
               </p>
               <p className='text-white text-sm'> 
               Our properties are designed with eco-friendly practices in mind, and we continually seek ways to reduce our carbon footprint and promote sustainable living among our residents.
               <div data-aos="zoom-in" data-aos-duration="2000">

</div>
               </p>
            </div>
            </div>
           
           </div>

        </div>
        </div>
        </div>
    );
};

export default Mission;