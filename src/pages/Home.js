import HeroImg from "../Images/HomeHeroImg.jpg"
import './Home.css';
import BoxesIcon from "../Icons/BoxesIcon";
import GearIcon from "../Icons/GearIcon";
import GraphIcon from "../Icons/GraphIcon";
import PuzzleIcon from "../Icons/PuzzleIcon";
import PrimaryButton from "../components/PrimaryButton.js";
import Footer from "../components/Footer.js";


function Home() {

const handleClick = () => {
    alert("Clicked");
};
    
  return (
    <div>
        <div className="HeroContainer">
            <img className="HeroImg" src={HeroImg} alt="Background img of heli" />
            <div className="HeroContent">
                <h1>ORION TRAINING SOLTIONS</h1>
                <h5>High-definition interactive training assets for aviation engineers</h5>
            </div>
        </div>
        <div className="IntroText">
            <h2>WHO WE ARE</h2>
            <p>At AeroNode, we specialise in producing precise, high-fidelity 3D models and demonstrations of the complex systems that define modern aircraft. Our focus is on clarity and accuracy, giving instructors the tools they need to teach advanced concepts with confidence.</p>

            <p>By turning intricate engineering into clear, visually engaging material, we help our clients deliver a higher standard of training while reaching more students at once. This approach not only improves learning outcomes but also reduces reliance on expensive physical equipment, creating new opportunities for growth and efficiency.</p>

            <p>For us, accuracy is more than detail — it is the foundation of effective education. Every model we design is built to reflect that principle, combining technical precision with visual clarity to make engineering learning both intuitive and impactful.</p>
        </div>

        <div className="CoreServices">
            <h2>CORE SERVICES</h2>
            <div className="CardContainer">
                <div className="CoreServicesCard">
                    <PuzzleIcon className="CardIcon" />
                    <h3 className="TextLayout">COMPLETE DEMONSTRATIONS</h3>
                    <p className="TextLayout">Exterior and interior 3D models for training and visualisation.</p>
                </div>

                <div className="CoreServicesCard">
                    <GearIcon className="CardIcon" />
                    <h3 className="TextLayout">SYSTEM MODULES</h3>
                    <p className="TextLayout">Exterior and interior 3D models for training and visualisation.</p>
                </div>

                <div className="CoreServicesCard">
                    <GraphIcon className="CardIcon" />
                    <h3 className="TextLayout">TALIOLRED ASSETS</h3>
                    <p className="TextLayout">Exterior and interior 3D models for training and visualisation.</p>
                </div>

                <div className="CoreServicesCard">
                    <BoxesIcon className="CardIcon" />
                    <h3 className="TextLayout">INTEGRATEABLE DELIVERABLES</h3>
                    <p className="TextLayout">Exterior and interior 3D models for training and visualisation.</p>
                </div>
            </div>
        </div>

        <div className="AlwaysStrivingCTA">
            <h3>ALWAYS STRIVING FOR BETTER</h3>
            <p>At AeroNode, we are always on the lookout for new challenges that will allow us to refine our services even more. Get in touch with us to see how we can deliver expertly designed demonstrations of systems found in an aircraft that you work with. 
            </p>
            <div className="ButtonLocation">
                <PrimaryButton ButtonText="LEARN MORE" onClick={handleClick}/>
            </div>
        </div>
        
        <Footer />
    </div>
  );
}

export default Home;
