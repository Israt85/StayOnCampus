import ban1 from '../../../assets/new.webp'
import ban2 from '../../../assets/about1.jpg'

const AboutHostel = () => {
    return (
      <div>
          <h1 className="text-3xl text-center font-bold my-6 " >About StayOnCampus</h1>
         <div className='grid grid-cols-3 gap-4 my-10 mx-20'>

<div className='flex flex-col items-center justify-center'>
 <div className='w-60 h-60 '>

 </div>
 <div>
     <img className='w-[600px] h-60' src={ban2} alt="" />
 </div>
</div>

<div className='flex flex-col items-center justify-center'>

 <div className='w-[400px] ml-20 border'>
     <img className=' w-[600px] h-80' src={ban1} alt="" />
 </div>
 <div className='w-96 h-60 ml-24 my-4 '>
<p className='text-[#5a4044] font-semibold'>Welcome to StayOnCampus, your ultimate destination for comfortable, secure, and convenient university living. At StayOnCampus, we understand the importance of finding the perfect place to call home during your academic journey.

</p>
</div>
</div>
<div className='my-28 h-28 w-64 p-2 bg-white'>
 <p className='text-[#5a4044] font-bold'>Enjoy modern amenities and facilities, including high-speed internet, study lounges, fitness centers, and recreational areas.

</p>
</div>

</div>
      </div>
    );
};

export default AboutHostel;