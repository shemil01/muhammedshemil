import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { motion } from 'framer-motion';

const ToggleButton = ({ setOpen, open }) => {
    return (
        <motion.button
            onClick={() => setOpen((prev) => !prev)}
            whileTap={{ scale: 0.9 }} // Scale animation on click
            whileHover={{ scale: 1.1 }} // Slight scale animation on hover
            transition={{ type: 'spring', stiffness: 300 }}
            className="toggle-button"
        >
            <motion.span
                initial={{ rotate: 0, opacity: 1 }} 
                animate={open ? { rotate: 180, opacity: 1 } : { rotate: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 300 }} 
            >
                {open ? <IoMdClose /> : <IoMenu />}
            </motion.span>
        </motion.button>
    );
};

export default ToggleButton;
