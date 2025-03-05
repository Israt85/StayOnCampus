
import Services from "../../Services/Services";
import img1 from '../../../assets/reservation.png'
import img2 from '../../../assets/secure-payment.svg'
import img3 from '../../../assets/checkin.png'
import { TiTick } from "react-icons/ti";

const HostelRooms =()=>{

    return(
        <div>
           <Services></Services>
           <div>
            <p className="text-3xl font-bold mx-4">Stages of booking a room</p>
            <div className="flex gap-4 m-6">
                <div className="w-20 h-20 border rounded-lg ">
                     <img className="rounded-lg" src={img1} alt="" />
                </div>
                <div>
                    <p className="text-2xl">ROOM RESERVATION</p>
                    <p className="w-80">StayOnCampus simplifies room reservations for students and visitors, offering a seamless booking experience with real-time availability and secure payments</p>
                </div>
            </div>
            <div className="flex gap-4 m-6">
                <div className="w-20 h-20 border bg-white flex justify-center items-center rounded-lg ">
                     <img className="rounded-lg w-16 h-16" src={img2} alt="" />
                </div>
                <div>
                    <p className="text-2xl">Filling in documents and payment</p>
                    <p className="w-80">Complete necessary documents and make secure payments effortlessly for a smooth reservation process.</p>
                </div>
            </div>
            <div className="flex gap-4 m-6">
                <div className="w-20 h-20 flex justify-center items-center bg-white border rounded-lg ">
                     <img className="rounded-lg w-16 h-16" src={img3} alt="" />
                </div>
                <div>
                    <p className="text-2xl">Сheck in hostel</p>
                    <p className="w-80">Seamless hostel check-in with quick verification and hassle-free access to your room.</p>
                </div>
            </div>
            <div className="w-40 h-10 mx-20 flex justify-center items-center border bg-[#2ecc71] rounded-lg font-bold">
                <p>Choose Room</p>
            </div>
           </div>

           {/* Rules */}
           <div>
            <p className="text-3xl font-bold m-4 ">Rule settlement, eviction and stay</p>

            <div className="mx-4">
            <p className="flex items-center "><p className="text-xl text-[#5a4044]"><TiTick /></p> Check-in: After 14:00 &
Check-out: Before 12:00 </p>
            <p className="flex items-center "><p className="text-xl text-[#5a4044]"><TiTick /></p> Full Payment Required: Settlement is only confirmed after complete payment.</p>
            <p className="flex items-center "><p className="text-xl text-[#5a4044]"><TiTick /></p> ID Requirement: A valid passport is mandatory for check-in </p>
            <p className="flex items-center "><p className="text-xl text-[#5a4044]"><TiTick /></p> Additional Info: Guests must follow hostel regulations for a comfortable stay. </p>
            </div>
           </div>
        </div>
    )
}
export default HostelRooms;