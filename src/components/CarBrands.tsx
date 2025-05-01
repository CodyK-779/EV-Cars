import logo1 from "../assets/img/logo1.png";
import logo2 from "../assets/img/logo2.png";
import logo3 from "../assets/img/logo3.png";
import logo4 from "../assets/img/logo4.png";
import logo5 from "../assets/img/logo5.png";
import logo6 from "../assets/img/logo6.png";
import { motion } from "framer-motion";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { y: -50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { stiffness: 300, duration: 1 },
  },
};

const CarBrands = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      className="max-w-4xl w-full mx-auto px-10 flex flex-wrap items-center justify-center sm:justify-between gap-12 md:gap-20 mt-14 text-white"
    >
      {logos.map((logo, index) => (
        <motion.div variants={item} key={index} className="w-10 cursor-pointer">
          <img
            src={logo}
            className="w-full opacity-40 hover:opacity-100 transition-opacity duration-150"
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default CarBrands;
