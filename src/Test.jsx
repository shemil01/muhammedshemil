import { motion } from "framer-motion";

const Test = () => {
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };
  return (
    <div>
      <motion.div
        className="box"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{duration:2}}
      ></motion.div>
    </div>
  );
};

export default Test;
