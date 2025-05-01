import logo from "../assets/img/favicon.png";
import { motion } from "framer-motion";

const Footer = () => {
  const textHover =
    "hover:text-whiteColor transition-colors duration-150 ease-in cursor-pointer w-fit";

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

  return (
    <div className="max-container w-full px-4 text-whiteColor mt-28">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        className="flex flex-col sm:flex-row justify-between gap-6"
      >
        {/* First Row */}
        <motion.div variants={item} className="flex flex-col">
          <div className="flex items-center gap-2">
            <img src={logo} className="w-7" />
            <p className="font-medium text-xl">Elecar</p>
          </div>
          <p className="text-sm text-textColor mt-4">
            We offer the best electric cars of <br /> the most recognized brands
            in <br /> the world.
          </p>
        </motion.div>
        {/* Second Row */}
        <motion.div variants={item} className="flex flex-col">
          <h4 className="text-lg font-medium">Company</h4>
          <p className={`text-sm text-textColor mt-4 ${textHover}`}>About</p>
          <p className={`text-sm text-textColor mt-2 ${textHover}`}>Cars</p>
          <p className={`text-sm text-textColor mt-2 ${textHover}`}>History</p>
          <p className={`text-sm text-textColor mt-2 ${textHover}`}>Shop</p>
        </motion.div>
        {/* Third Row */}
        <motion.div variants={item} className="flex flex-col">
          <h4 className="text-lg font-medium">Information</h4>
          <p className={`text-sm text-textColor mt-4 ${textHover}`}>
            Request a quote
          </p>
          <p className={`text-sm text-textColor mt-2 ${textHover}`}>
            Find a dealer
          </p>
          <p className={`text-sm text-textColor mt-2 ${textHover}`}>
            Contact us
          </p>
          <p className={`text-sm text-textColor mt-2 ${textHover}`}>Services</p>
        </motion.div>
        {/* Fourth Row */}
        <motion.div variants={item}>
          <h4 className="text-lg font-medium">Follow us</h4>
          <div className="flex items-center mt-4">
            <i className="ri-facebook-fill text-whiteColor w-8 opacity-80 hover:opacity-100 transition-opacity duration-150 ease-in cursor-pointer"></i>
            <i className="ri-instagram-line w-8 opacity-80 hover:opacity-100 transition-opacity duration-150 ease-in cursor-pointer"></i>
            <i className="ri-twitter-line w-8 opacity-80 hover:opacity-100 transition-opacity duration-150 ease-in cursor-pointer"></i>
          </div>
        </motion.div>
      </motion.div>
      <p className="text-xs text-center mt-24 text-textColorLight">
        © Bedimcode. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
