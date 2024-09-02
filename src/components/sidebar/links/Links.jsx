import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  return (
    <motion.div className="links" variants={variants}>
      <motion.a
      href="#homepage"
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        
       Homepage
      </motion.a>
      <motion.a
      href="#services"
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        
       services
      </motion.a>
      <motion.a
      href="#project"
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
       
      Project
      </motion.a>
      <motion.a
      href="#contact"
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
       
        Contact
      </motion.a>
      <motion.a
      href="#home"
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
       
       About
      </motion.a>
    </motion.div>
  );
};

export default Links;
