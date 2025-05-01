import offerBg from "../assets/img/offer.png";
import { motion } from "framer-motion";

const SpecialOffers = () => {
  return (
    <div className="bg-featuredImg bg-center bg-cover mt-16 pt-20 pb-12">
      <div className="max-container px-4 flex flex-col sm:flex-row justify-between items-center gap-14 sm:gap-0 overflow-hidden text-whiteColor">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center sm:items-start gap-8 w-full"
        >
          <h1 className="text-2xl text-center sm:text-start font-medium">
            Do You Want To Receive <br /> Special Offers?
          </h1>
          <p className="text-sm text-center sm:text-start text-textColor">
            Be the first to receive all the information about our <br />{" "}
            products and new cars by email by subscribing to <br /> our mailing
            list.
          </p>
          <button className="px-6 py-3 w-fit text-sm text-whiteColor rounded bg-firstColor hover:bg-opacity-85 transition-all duration-150 ease-in">
            Subscribe Now
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="max-w-md"
        >
          <img src={offerBg} className="w-full object-contain" />
        </motion.div>
      </div>
    </div>
  );
};

export default SpecialOffers;
