import Banner from "../../Components/Banner/Banner";
import Benefits from "../../Components/Benefits/Benefits";
import { Carousel3 } from "../../Components/Carousel/Carousel";
import Consultaion from "../../Components/Consultation/Consultaion";
import Services from "../../Components/Services/Services";

const Home = () => {
    return (
        <div className="bg-slate-100">
            <Banner/>
            <Consultaion/>
            <Services/>
            <Carousel3/>
            <Benefits/>
        </div>
    );
};

export default Home;