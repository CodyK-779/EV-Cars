import features from "../assets/img/features.png";
import map from "../assets/img/map.svg";
import { motion } from "framer-motion";

const MFeature = () => {
  return (
    <div className="max-container px-4 mt-32 text-whiteColor overflow-hidden relative">
      <h1 className="text-2xl font-medium text-center mb-16">More Features</h1>
      <div className="relative max-w-md w-full mx-auto">
        <div className="relative grid place-content-center z-10">
          <motion.div
            initial={{ opacity: 0.5, y: -110 }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img src={features} className="w-[200px]" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center py-3.5 px-10 rounded-3xl absolute top-[50px] min-[460px]:left-[60px] left-0 bg-blurcolor backdrop-blur-[16px]"
          >
            <h1 className="text-xl font-medium mb-1.5">800v</h1>
            <p className="text-sm font-medium">Turbo</p>
            <p className="text-sm font-medium">Chargin</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center py-3.5 px-11 rounded-3xl absolute top-[120px] min-[460px]:right-[38px] right-0 bg-blurcolor backdrop-blur-[16px]"
          >
            <h1 className="text-xl font-medium mb-1.5">350</h1>
            <p className="text-sm font-medium">Km</p>
            <p className="text-sm font-medium">Range</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center py-3.5 px-12 rounded-3xl absolute bottom-[118px] min-[460px]:left-[60px] left-0 bg-blurcolor backdrop-blur-[16px]"
          >
            <h1 className="text-xl font-medium mb-1.5">480</h1>
            <p className="text-sm font-medium">Km</p>
            <p className="text-sm font-medium">Travel</p>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <img
          src={map}
          className="absolute rotate-[-22deg] w-[560px] top-[58%] sm:top-[66%] left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </motion.div>
    </div>
  );
};

export default MFeature;
