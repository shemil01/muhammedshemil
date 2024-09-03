import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Fullstack e-commerce website",
    img: "/plashoe.png", 
    source:"https://github.com/shemil01/plashoe-frontend",
    desc: "Developed a full-fledged e-commerce platform using the MERN stack, improving UI to reduce bounce rates by 50% and increase conversions by 20%. Implemented secure user authentication with JWT and built a scalable backend with Node.js, Express.js, and MongoDB.",
  },
  {
    id: 2,
    title: "Spotify clone",
    img: "/spotify.png",  
    source:" https://github.com/shemil01/spotify-client",
    desc:"Developed a Spotify clone from scratch using the MERN stack and Tailwind CSS, replicating core features like JWT-based authentication, file uploads with Multer, and cloud storage via Cloudinary. Created playlist management, advanced search with letter suggestions, and built an admin dashboard for user and content management."
  },
  {
    id: 3,
    title: " E-commerce backend",
    img: "/backend.png", 
    source:"https://github.com/shemil01/backend-project",
  desc:"Developed a robust e-commerce backend using Node.js, Express, and MongoDB. Designed and implemented RESTful APIs for managing products, user authentication, order processing, and payment integration. Ensured secure transactions with JWT-based authentication and encryption."
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container" >
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt={item.title} />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
           <a href={item.source}> <button>See suource code</button></a>
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
    <div className="portfolio" id="project" ref={ref}>
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
