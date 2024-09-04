import img1 from '../../../../assets/benefits2.jpeg'
import img2 from '../../../../assets/benefits3.jpg'

const KnowMore = () => {
    return (
        <div className='flex justify-around my-10'>
            <div className='text-4xl font-bold'>
              <h2>Want to Know More?</h2>
              <p>Reach Out To Us!</p>
              <button className="btn py-1 my-6 bg-[#2ecc71]">CONTACT US</button>
            </div>
            <div className='flex'>
            <img className='rounded-full w-40 h-40' src={img1} alt="" />
            <img className='rounded-full w-40 h-40 mt-20' src={img2} alt="" />
            </div>
        </div>
    );
};

export default KnowMore;