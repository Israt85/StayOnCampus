import img1 from '../../assets/benefits1.png'
import img2 from '../../assets/benefits2.jpeg'
import img3 from '../../assets/benefits3.jpg'

const Benefits = () => {
    return (
        <div>
              <h1 className="text-3xl my-10 font-bold text-center">Benefits of StayOnCampus</h1>
            <div className='w-full mx-auto justify-center h-full grid grid-cols-1 lg:grid-cols-3 gap-2'>
            <div className='flex flex-col justify-center items-center'>
            <div  className=''>
<img className='w-40 h-40 rounded-full' src={img1} alt="" />
            </div>
            <div>
<ul className='p-2 text-center'>
    <h2 className=' text-[#5a4044] font-bold text-xl'>Room Availability and Booking</h2>
    <li>Real-time availability updates.Online booking and reservation system.</li>
</ul>
            </div>
            </div>
            <div className='flex flex-col justify-center items-center'>
            <div>
<img className='w-40 h-40 rounded-full' src={img2} alt="" />
            </div>
            <div>
<ul className='p-2 text-center'>
<h2 className='text-center text-[#5a4044] font-bold text-xl'>Online payment system</h2>
    <p>Secure online payment options for booking and rent.</p>
</ul>
            </div>
            </div>
            <div className='flex flex-col justify-center items-center'>
            <div>
<img className='w-40 h-40 rounded-full' src={img3} alt="" />
            </div>
            <div>
<ul className='p-2 text-center'>
<h2 className='text-center text-[#5a4044] font-bold text-xl'>Roommate Matching</h2>
    <p>System for finding and matching with roommates based on preferences</p>
</ul>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Benefits;