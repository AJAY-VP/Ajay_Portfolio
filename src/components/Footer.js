import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
    return (
      <div className="footer">
        <p>
          Contact Details: vpajay.99@gmail.com |{" "}
          <a
            className="linkedin-link"
            rel="noopener noreferrer"
            href="https://linkedin.com/in/ajay-v-p-a70453177"
            target="_blank"
          >
            {" "}
            <FaLinkedin className="footer-icon"/>
          </a>{" "} |{" "} <a
            className="leetcode-link"
            rel="noopener noreferrer"
            href="https://leetcode.com/u/user2229x/"
            target="_blank"
          >
           <SiLeetcode className="footer-icon"/>
          </a>
        </p>
      </div>
    );
  };

  export default Footer;