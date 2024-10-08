import { useRef } from "react";
import "./contact.scss";
import { useInView, motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const inputRefs = useRef([]);

  const isInView = useInView(ref, { margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_tw4p6e8", "template_2x2grrc", formRef.current, {
        publicKey: "tCoR5hwF8CIL4t2pG",
      })
      .then(
        (result) => {
          toast.success("Message sent successfully");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const handleFocus = (index) => {
    // Smoothly scroll to the focused input when it's focused
    inputRefs.current[index].scrollIntoView({ behavior: "smooth", block: "end" });
  };

  return (
    <motion.div
      id="contact"
      ref={ref}
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Let's work together</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>shemilmk1033@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Address</h2>
          <span>Mankulangara(H) Chekiriyan Moochi, Malappuram, Kerala</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Phone</h2>
          <span>+91 9746602904</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <motion.div
          className="phoneSvg"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <svg
            width="300px"
            height="300px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 1 }}
              transition={{ duration: 3 }}
              d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
            />
          </svg>
        </motion.div>

        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <input
            type="text"
            required
            placeholder="Name"
            name="name"
            onFocus={() => handleFocus(0)}
            ref={(el) => (inputRefs.current[0] = el)}
          />
          <input
            type="email"
            required
            placeholder="Email"
            name="email"
            onFocus={() => handleFocus(1)}
            ref={(el) => (inputRefs.current[1] = el)}
          />
          <textarea
            rows={8}
            placeholder="Message"
            name="message"
            onFocus={() => handleFocus(2)}
            ref={(el) => (inputRefs.current[2] = el)}
          />
          <button type="submit">Submit</button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
