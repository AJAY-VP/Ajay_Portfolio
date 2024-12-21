import Brandlogo from "../../assets/Ajay_logo.jpg";

const Header = () => {
  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={Brandlogo} />
      </div>
      <div className="nav-items">
        <ul>
          <li onClick={() => handleScroll("about")}> About </li>
          <li onClick={() => handleScroll("skills")}>Skills </li>
          <li onClick={() => handleScroll("work")}> Work Experience</li>
          <li onClick={() => handleScroll("projects")}> Projects </li>
          <li onClick={() => handleScroll("achievements")}> Achievements </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
