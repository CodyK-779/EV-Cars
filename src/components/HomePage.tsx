import homeLogo from "../assets/img/home.png";
import { motion } from "framer-motion";

const HomePage = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { stiffness: 300, duration: 1 },
    },
  };

  return (
    <div className="max-container text-white pt-20" id="Home">
      <div className="flex flex-col items-center">
        <motion.h1
          initial={{ y: -40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl font-semibold mb-4"
        >
          Choose The Best Car
        </motion.h1>
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-xl font-semibold mb-0.5"
        >
          Porsche Mission E
        </motion.p>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-2 mb-8"
        >
          <i className="ri-flashlight-fill text-firstColor"></i>
          <p>Electric car</p>
        </motion.div>
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="w-80"
        >
          <img src={homeLogo} className="w-full" />
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="flex items-center gap-20 sm:gap-24 mt-10 mb-14"
        >
          <motion.div variants={item} className="flex flex-col items-center">
            <i className="ri-temp-cold-line"></i>
            <h1 className="mt-4 text-xl font-medium">24°</h1>
            <p className="text-[10px] text-textColor font-light">TEMPERATURE</p>
          </motion.div>
          <motion.div variants={item} className="flex flex-col items-center">
            <i className="ri-dashboard-3-line"></i>
            <h1 className="mt-4 text-xl font-medium">873</h1>
            <p className="text-[10px] text-textColor font-light">MILEAGE</p>
          </motion.div>
          <motion.div variants={item} className="flex flex-col items-center">
            <i className="ri-flashlight-fill"></i>
            <h1 className="mt-4 text-xl font-medium">94%</h1>
            <p className="text-[10px] text-textColor font-light">BATTERY</p>
          </motion.div>
        </motion.div>
        <motion.a
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          href="#About"
          className="relative border-2 border-greenBtn w-[70px] h-[70px] rounded-full text-sm font-medium flex items-center justify-center start-btn"
        >
          START
        </motion.a>
      </div>
    </div>
  );
};

export default HomePage;
