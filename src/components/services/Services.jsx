import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    x: -500,
    transition: {
      duration: 0.5,
    },
  },
};

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { threshold: 0.1, triggerOnce: false });

  const isMobile = window.innerWidth <= 768; // You can adjust this breakpoint

  return (
    <motion.div
    id="services"
      className="services"
      variants={variants}
      initial="initial"
      animate={isInView || isMobile ? "animate" : "initial"} // Force animation on mobile
      exit="exit"
      ref={ref}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow <br />
          and move forward
        </p>
        <hr />
      </motion.div>

      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="People" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>

      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Web designing</h2>
          <p>
            Crafting visually appealing and user-friendly websites that provide
            an exceptional user experience. We combine creativity with modern
            technologies like HTML, CSS, and JavaScript, ensuring responsive
            designs that perform seamlessly across all devices. Our approach
            integrates intuitive layouts, engaging visuals, and smooth
            interactions to bring your vision to life on the web.
          </p>
          <button><a href="#contact">Go</a></button>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Web developing</h2>
          <p>
            Building dynamic and scalable web applications using the MERN stack
            (MongoDB, Express, React, Node.js) and Tailwind CSS for efficient,
            responsive design. Our solutions focus on high performance, seamless
            user experiences, and scalable backends to meet the growing demands
            of your business.
          </p>
          <button><a href="#contact">Go</a></button>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>E-comerce development</h2>
          <p>
            Building robust, scalable e-commerce platforms designed to enhance
            your online business. Our solutions include seamless user
            experiences, secure payment gateways, inventory management, and
            responsive designs to ensure your store performs flawlessly on all
            devices.
          </p>
          <button><a href="#contact">Go</a></button>
        </motion.div>

       
      </motion.div>
    </motion.div>
  );
};

export default Services;
