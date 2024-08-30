import { useRef } from "react";
import "./services.scss";
import { motion,useInView } from "framer-motion";

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
    const ref = useRef()
    const isInView = useInView(ref, { threshold: 0.2, triggerOnce: false });
  

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      animate={isInView ? "animate" : "initial"} // Triggers animation on scroll in
      exit="exit" // Optional exit animation when scrolling out
      ref={ref} // Reference to the element for scroll detection
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
            <b>Unique</b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <b>For Your</b> Business.
          </h1>
          <button>What We Do?</button>
        </div>
      </motion.div>

      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            accusantium porro, quas velit iure consequuntur at asperiores ipsum
            eveniet eligendi nihil atque nam impedit inventore aspernatur
            quibusdam totam aperiam neque.
          </p>
          <button>Go</button>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            accusantium porro, quas velit iure consequuntur at asperiores ipsum
            eveniet eligendi nihil atque nam impedit inventore aspernatur
            quibusdam totam aperiam neque.
          </p>
          <button>Go</button>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            accusantium porro, quas velit iure consequuntur at asperiores ipsum
            eveniet eligendi nihil atque nam impedit inventore aspernatur
            quibusdam totam aperiam neque.
          </p>
          <button>Go</button>
        </motion.div>

        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            accusantium porro, quas velit iure consequuntur at asperiores ipsum
            eveniet eligendi nihil atque nam impedit inventore aspernatur
            quibusdam totam aperiam neque.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
