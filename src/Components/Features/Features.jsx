import Feature from '../Feature/Feature';
import Feature2 from '../Feature2/Feature2'
import img1 from '../../assets/room management.jpg'
import img2 from '../../assets/guest.jpeg'
import img3 from '../../assets/account.png'
import img4 from '../../assets/report.png'
import img5 from '../../assets/mobilr.png'
import img6 from '../../assets/Best-online-hostel-booking-system-in-India-2024-1024x536.png'

const Features = () => {
    return (
        <div>
             <h1 className="text-3xl my-10 font-bold text-center">Features of StayOnCampus</h1>
             <div>
                <Feature  pic={img1} title={'Room Allotment'} des={'Room allotment is one of the crucial tasks in a hostel. Students are provided hostel rooms on the basis of their availability. Information about available rooms and allocated rooms along with wing-wise data is stored in the system.'}></Feature>
                <Feature2 pic={img2}title={'Easy Guest Entries'} des={'Students have visitors such as their family members, relatives, and friends visiting them in the hostel. Easy and convenient tracking of their movement can be made possible using automated hostel management software. Here, separate guest profiles can be created for the guests brought in by the students and their data is stored for future references.'}></Feature2>
                <Feature  pic={img3}title={'Seamless Account Management'} des={'Our hostel management system offers a robust Account Management feature, allowing administrators to efficiently handle all aspects of resident accounts. Easily create, update, and manage accounts for students and staff, ensuring accurate and up-to-date records. '}></Feature>
                <Feature2 pic={img4}title={'Comprehensive Reports and Analytics'} des={'Our hostel management system includes a powerful Reports and Analytics feature, providing administrators with detailed insights into various aspects of hostel operations. Generate comprehensive reports on occupancy rates, financial transactions, maintenance requests, and more. Utilize data-driven analytics to make informed decisions, optimize resource allocation, and enhance overall efficiency.'}></Feature2>
                <Feature  pic={img5}title={'Mobile Accessibility'} des={'Our hostel management system is designed with Mobile Accessibility in mind, ensuring that administrators and residents can access essential features anytime, anywhere. The mobile-friendly interface allows users to manage their accounts, view reports, submit maintenance requests, and receive notifications directly from their smartphones or tablets.'}></Feature>
                <Feature2 pic={img6}title={'Effortless Online Booking System'} des={'Our hostel management system features a user-friendly Online Booking System, streamlining the process for prospective residents to secure their accommodations. Easily browse available rooms, view detailed descriptions and photos, and book your preferred option with just a few clicks.'}></Feature2>
             </div>
            
        </div>
    );
};

export default Features;