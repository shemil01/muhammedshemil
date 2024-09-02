import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  

  const skills = [
    { id: 1, skill: "HTML", img: "/html5.png" },
    { id: 2, skill: "CSS", img: "/css3.png" },
    { id: 3, skill: "JavaScript", img: "/javascript.png" },
    { id: 4, skill: "React", img: "/react.svg" },
    { id: 5, skill: "Bootstrap", img: "/bootstrap.svg" },
    { id: 6, skill: "Redux", img: "/redux.png" },
    { id: 7, skill: "Tailwind css", img: "/tailwindcss.svg" },
    { id: 8, skill: "Express js", img: "/express.webp" },
    { id: 9, skill: "Node js", img: "/nodejs.png" },
    { id: 10, skill: "MongoDb", img: "/mongodb.svg" },
    { id: 11, skill: "Jwt", img: "/jwt.png" },
    { id: 12, skill: "Postman", img: "/postman.webp" },
    { id: 13, skill: "Git Hub", img: "/gitHub.png" },
    { id: 14, skill: "Nodemailer", img: "/nodemailer.png" },
  ];

  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);


  const totalWidthPercentage = skills.length * 100;


  const sliderVariants = {
    initial: {
      x: 0,
      rotate: 0,
    },
    animate: {
      x: `-${totalWidthPercentage}%`, 
      rotate: 360, 
      transition: {
        repeat: Infinity,
        repeatType: "mirror", 
        duration: 10, 
        ease: "linear", 
      },
    },
  };

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      

      <motion.div className="skills-container">
      <motion.h1 style={{ y: yText }}>Skills</motion.h1>
        <motion.div className="skills">
          {skills.map((item) => (
            <motion.div
              key={item.id}
              className="skill-item"
              variants={sliderVariants}
              initial="initial"
              animate="animate"

             
            >
              <img src={item.img} alt={item.skill} />
              <p>{item.skill}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div className="mountains"></motion.div>
      <motion.div
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "services" ? "/planets.png" : "/sun.png"
          })`,
        }}
        className="planet"
      ></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
