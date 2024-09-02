import "./navbar.scss";
import { motion } from "framer-motion";
import {
  FaFacebookSquare,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
        <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Muhammed shemil
        </motion.span>
        <div className="social">
          <a href="">
            <FaFacebookSquare />
          </a>
          <a href="https://www.instagram.com/sshemiil?igsh=azVwYmxscXdqYjNm">
            <FaInstagram />
          </a>
          <a href="https://github.com/shemil01">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/muhammed-shemil-mk/">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
