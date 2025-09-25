import Logo from "../Images/LogoWhite.png";

function Footer(){
  return (
    <div className="FooterContaier">
      <div className="LogoSocialsContainer">
           <img className="FooterLogo" src={Logo} alt="Orion company logo "/>
      </div>
      <div className="FooterNavContainer">
        <div className="NavClmOne"></div>
        <div className="NavClmTwo"></div>
        <div className="NavClmThree"></div>
      </div>
    </div>
  );
}

export default Footer; 
