import Banner from "../../Components/Banner/Banner";
import Benefits from "../../Components/Benefits/Benefits";
import { Carousel3 } from "../../Components/Carousel/Carousel";
import Consultaion from "../../Components/Consultation/Consultaion";
import AccordionWithIndex from "../../Components/Faq/Faq";
import Features from "../../Components/Features/Features";
import Footer5 from "../../Components/Footer/Footer";
import Services from "../../Components/Services/Services";

const Home = () => {
    return (
        <div className="bg-slate-100">
            <Banner/>
            <Consultaion/>
            <Services/>
            <Carousel3/>
            <Features/>
            <Benefits/>
            <AccordionWithIndex></AccordionWithIndex>
        
        </div>
    );
};

export default Home;