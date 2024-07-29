import ban1 from '../../../assets/new.webp'
import ban2 from '../../../assets/about1.jpg'

const AboutHostel = () => {
    return (
      <div>
          <h1 className="text-3xl text-center font-bold my-6" >About StayOnCampus</h1>
         <div className='grid grid-cols-3 gap-4 my-10 mx-16'>

<div className='flex flex-col items-center justify-center'>
 <div className='w-60 h-60 '>

 </div>
 <div>
     <img className='w-80 h-60' src={ban2} alt="" />
 </div>
</div>

<div className='flex flex-col items-center justify-center'>

 <div className=''>
     <img className='w-80 h-80' src={ban1} alt="" />
 </div>
 <div className='w-80 h-60 ml-10 my-2 '>
<p>Welcome to StayOnCampus, your ultimate destination for comfortable, secure, and convenient university living. At StayOnCampus, we understand the importance of finding the perfect place to call home during your academic journey.

</p>
</div>
</div>
<div className='my-28 h-32 w-64 p-3 -ml-16  bg-white'>
 <p>Enjoy modern amenities and facilities, including high-speed internet, study lounges, fitness centers, and recreational areas.

</p>
</div>

</div>
      </div>
    );
};

export default AboutHostel;