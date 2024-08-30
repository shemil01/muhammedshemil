import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React e-commerce website",
    img: "/plashoe.png", // Corrected path
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit quod soluta error, corrupti nostrum accusantium eaque dolore maxime velit distinctio neque quis assumenda fugiat excepturi modi sapiente consequatur nesciunt? Nulla.",
  },
  {
    id: 2,
    title: "Plashoe e-commerce website",
    img: "/plashoe.png", // Corrected path
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit quod soluta error, corrupti nostrum accusantium eaque dolore maxime velit distinctio neque quis assumenda fugiat excepturi modi sapiente consequatur nesciunt? Nulla.",
  },
  {
    id: 3,
    title: "Full stack e-commerce website",
    img: "/plashoe.png", // Corrected path
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit quod soluta error, corrupti nostrum accusantium eaque dolore maxime velit distinctio neque quis assumenda fugiat excepturi modi sapiente consequatur nesciunt? Nulla.",
  },
  {
    id: 4,
    title: "MERN e-commerce website",
    img: "/plashoe.png", // Corrected path
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit quod soluta error, corrupti nostrum accusantium eaque dolore maxime velit distinctio neque quis assumenda fugiat excepturi modi sapiente consequatur nesciunt? Nulla.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300,300]); // Ensure `y` is used

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt={item.title} />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;