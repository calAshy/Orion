import Logo from "../Images/LogoWhite.png";
import './Footer.css';
import FacebokIcon from "./Facebook";

function Footer() {
  return (
    <div className="Footer">
      <div className="FooterContainer">

        <div className="LogoSocialsContainer">
            <div className="LogoSlogan">
              <img className="FooterLogo" src={Logo} alt="Orion company logo "/>
              <h5>TRAINING ENGINEERED</h5>
            </div>
            <div className="NavIconContainer">
              <FacebokIcon className="NavIcon" />
              <FacebokIcon className="NavIcon" />
              <FacebokIcon className="NavIcon" />
              <FacebokIcon className="NavIcon" />
              <FacebokIcon className="NavIcon" />
            </div>
        </div>


        <div className="FooterNavContainer">
          <div className="NavColumn">
            <ul className="NavColumnUL">
              <li className="NavColumnLI">Link</li>
              <li className="NavColumnLI">Link</li>
              <li className="NavColumnLI">Link</li>
            </ul>
          </div>
          <div className="NavColumn">
            <ul className="NavColumnUL">
              <li className="NavColumnLI">Link</li>
              <li className="NavColumnLI">Link</li>
              <li className="NavColumnLI">Link</li>
            </ul>
          </div>
          <div className="NavColumn">
            <ul className="NavColumnUL">
              <li className="NavColumnLI">Link</li>
              <li className="NavColumnLI">Link</li>
              <li className="NavColumnLI">Link</li>
            </ul>
          </div>
        </div>
      </div>


      <div className="FooterMetaContainer">
        <h6>Site Version: 1.0.0</h6>
        <h6>Orion Training Solutions LTD - TRAINING, ENGINEERED</h6>
        <h6>Legal</h6>
      </div>


    </div>
  );
}

export default Footer; 
