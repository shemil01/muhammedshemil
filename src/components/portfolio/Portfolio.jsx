import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring } from "framer-motion";

const itemVariants = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};
const variants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

const items = [

  {
    id: 1,
    title: "Gallivant Charters Qatar",
    img: "/gallivent.png",
    source: "https://github.com/shemil01/",
    link: "https://www.gallivantchartersqatar.com",
    desc: "Developed a full-stack Next.js application for Gallivant Charters Qatar, a live yacht rental platform. Implemented an admin dashboard for managing bookings, users, and yacht details. Integrated secure authentication, real-time availability updates, and optimized performance for a seamless user experience."
}
,
  {
    id: 2,
    title: "Spotify clone",
    img: "/spotify.png",
    source: "https://github.com/shemil01/spotify-client",
    link: " https://spotify-client-psi-black.vercel.app",
    desc: "Developed a Spotify clone from scratch using the MERN stack and Tailwind CSS, replicating core features like JWT-based authentication, file uploads with Multer, and cloud storage via Cloudinary. Created playlist management, advanced search with letter suggestions, and built an admin dashboard for user and content management.",
  },
  {
    id: 3,
    title: "Technohub Qatar",
    img: "/technohub.png",
    source: "https://github.com/shemil01/",
    link: " https://www.technohubqatar.com/",
    desc: "Built the official Techno Hub Qatar website using Next.js and Framer Motion, delivering a modern, high-performance, and responsive user experience. Techno Hub is a leading IT solutions provider in Qatar, committed to innovation and aligned with Qatar’s National Vision 2030. The project highlights include dynamic content sections, smooth animations, SEO optimization, and a scalable architecture to showcase services for public institutions and private enterprises.",
  },

  {
    id: 4,
    title: "Fresh Fruites ",
    img: "/jeddahqatar.png",
    source: "https://github.com/shemil01",
    link: "https://www.jeddahqatar.com/",
    desc: "Developed a high-performance corporate website for Jeddah Trading Co., a global leader in fresh produce distribution since 1982. Built with Next.js 15, the site highlights the company’s legacy, global reach, and robust infrastructure. Integrated dynamic content management, responsive design, and SEO best practices to showcase their services across the Middle East, Europe, and Asia. Optimized for performance and scalability to support international visibility and user engagement.",
  },
  {
    id: 5,
    title: "Digital Marketing & Web Development Agency",
    img: "/zorvix.png",
    source: "https://github.com/shemil01",
    link: "https://www.zorvix.in/",
    desc: "Developed a modern and responsive digital marketing & web development agency website using Next.js 15. Optimized performance for faster load times, improving user engagement by 40%. Integrated SEO best practices, dynamic content management, and secure authentication for enhanced user experience.",
  },
  
  {
    id: 6,
    title: " e-commerce website",
    img: "/plashoe.png",
    source: "https://github.com/shemil01/plashoe-frontend",
    link: "https://react-e-commerce-project-eight.vercel.app/",
    desc: "Developed a full-fledged e-commerce platform using the MERN stack, improving UI to reduce bounce rates by 50% and increase conversions by 20%. Implemented secure user authentication with JWT and built a scalable backend with Node.js, Express.js, and MongoDB.",
  },

  {
    id: 7,
    title: " The Daily Biz",
    img: "/blog.png",
    source: "https://github.com/shemil01/blog-app-nextjs",
    link: "https://the-daily-biz.vercel.app/blog",
    desc: "A blog app built using Next.js and TypeScript, featuring both dark mode and light mode for a personalized user experience. The app includes a convenient copy button for easily copying content. It’s designed to be fast, responsive, and user-friendly, with seamless navigation across posts.",
  },

  {
    id: 8,
    title: " Social Media API",
    img: "/socialmedia.webp",
    source: "https://github.com/shemil01/social-media-api",
    link: "https://github.com/shemil01/social-media-api",
    desc: "Developed a social media API using Express.js, MongoDB, and JWT for user authentication. Features include user registration, friend requests, post creation, comments, and likes. Users can view a feed with posts from friends and non-friends where their friends have commented. Integrated Multer for profile picture uploads and efficient media handling.",
  },
  {
    id: 9,
    title: " AccuWeather",
    img: "https://www.creativefabrica.com/wp-content/uploads/2020/10/06/Kawaii-Cute-Weather-Vector-Clipart-Graphics-5893599-1.jpg",
    source: "https://github.com/shemil01/weather",
    link: "https://accuweather-steel.vercel.app/",
    desc: "A dynamic weather app built with Next.js and TypeScript, offering real-time weather updates and a sleek, user-friendly interface. The app features a search bar for easy location lookup, animated backgrounds to match current conditions, and a forecast view to keep users prepared for upcoming weather.ensuring a smooth experience across devices.",
  },
  {
    id:10,
    title: " E-commerce backend",
    img: "/backend.png",
    link: "https://github.com/shemil01/backend-project",
    source: "https://github.com/shemil01/backend-project",
    desc: "Developed a robust e-commerce backend using Node.js, Express, and MongoDB. Designed and implemented RESTful APIs for managing products, user authentication, order processing, and payment integration. Ensured secure transactions with JWT-based authentication and encryption.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <motion.div
            variants={variants}
            initial="initial"
            whileInView="animate"
            className="imageContainer"
            ref={ref}
          >
            <img src={item.img} alt={item.title} />
            <div className="overlay">
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                Visit Website
              </a>
            </div>
          </motion.div>
          <motion.div
            ref={ref}
            variants={itemVariants}
            initial="initial"
            whileInView="animate"
            className="textContainer"
          >
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.source}>
              <button>Source code</button>
            </a>
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
