import about from "../assets/img/about.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      className="flex flex-col min-[930px]:flex-row items-start sm:items-center text-whiteColor gap-20 max-container py-32 px-4 overflow-hidden"
      id="About"
    >
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative"
      >
        <img
          src={about}
          className="rounded-md w-full sm:w-[400px] min-[930px]:w-auto"
        />
        <div className="absolute flex flex-col items-center justify-center rounded-xl -bottom-8 right-0 bg-blurcolor backdrop-blur-[16px] py-3 px-6">
          <p className="font-medium">2.500+</p>
          <p className="text-xs text-textColor">Supercharges placed</p>
          <p className="text-xs text-textColor">along popular routes</p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h1 className="sm:text-3xl text-2xl font-medium mb-8">
          Machines With <br /> Future Technology
        </h1>
        <p className="text-sm sm:text-base text-textColor sm:w-[380px] mb-10">
          See the future with high-performance electric cars produced by
          renowned brands. They feature futuristic builds and designs with new
          and innovative platforms that last a long time.
        </p>
        <button className="px-6 py-3 text-white rounded bg-firstColor hover:bg-opacity-85 transition-all duration-150 ease-in">
          Know more
        </button>
      </motion.div>
    </div>
  );
};

export default About;
