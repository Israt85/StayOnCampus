import single from '../../assets/singlebed.jpg'
import double from '../../assets/doublebed.jpeg'
import triple from '../../assets/fourbed.jpeg'
import Service from '../Service/Service';

const Services = ({pic,title}) => {
    return (

     <div>
        <h2 className="text-3xl text-center font-bold">Features of StayOnCampus</h2>
        <div className='grid grid-cols-3 gap-3 px-2 my-10'>
           
          <Service pic={single} title={'Single Bed,Premium meal'} ></Service>
          <Service pic={double} title={'Double Bed,standard meal'} ></Service>
          <Service pic={triple} title={'Triple or more bed,Basic meal'} ></Service>
    
     </div>
     </div>
    );
};

export default Services;