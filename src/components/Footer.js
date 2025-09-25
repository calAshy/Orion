import Logo from "../Images/LogoWhite.png";
import './Footer.css';

function Footer() {
  return (
    <div className="FooterContainer">
      <div className="LogoSocialsContainer">
           <img className="FooterLogo" src={Logo} alt="Orion company logo "/>
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
  );
}

export default Footer; 
