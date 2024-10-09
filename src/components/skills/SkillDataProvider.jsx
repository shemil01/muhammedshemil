// SkillDataProvider.js
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SkillDataProvider = ({ src, width, height, index, title }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const animationDelay = 0.3;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? 'visible' : 'hidden'}
      transition={{ delay: index * animationDelay }}
      className="skill-card"
    >
      <div className="card-inner">
        {/* Front of the card */}
        <div className="card-front">
          <img
            src={src}
            width={width}
            height={height}
            alt={title}
            className="skill-image"
          />
        </div>
        
        {/* Back of the card */}
        <div className="card-back">
          <h3 className="skill-title">{title}</h3>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillDataProvider;
