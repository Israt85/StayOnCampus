import bannerImg from '../../assets/BannerImg.jpg'
const Banner =()=>{
    return(
        <div className='w-full h-96 bg-green-200 flex justify-between items-center'>
              <div>
                 <img className='h-72 border-t-4 border-b-4 border-e-4 border-green-500 rounded-e-full w-[500px]' src={bannerImg} alt="" />
              </div>
              <div className='text-center mx-auto '>
                <h2 className='text-3xl font-bold w-[400px] ml-8 my-2 border-b-4 border-green-500'>Services that Simplify Student Life</h2>
                <p className='font-semibold'>From room booking to meal plans — we’ve got everything covered.</p>
              </div>
        </div>
    )
}
export default Banner;